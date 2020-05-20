const db = require("../models");

// defining methods for the booksController
module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(442).json(err));
    },
    findById: function(req, res) {
        db.Book
            .findById(req.param.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(442).json(err));
    },
    create: function(req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(442).json(err));
    },
    update: function(req, res) {
        db.Book
            .update( {_id: req.param.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(442).json(err));
    },
    remove: function(req, res) {
        db.Book
            .update( {_id: req.param.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(442).json(err));
    },
};