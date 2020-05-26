const express = require("express");
const app = express();
const routes = require("./routes")

// define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this is for connect to mongodb
const mongoose = require("mongoose");
// connect to the mongo DBserver
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch5");


// create mongo connection
const conn = mongoose.createConnection(mongoURI);

// serve up on heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// adding routes 
app.use(routes);


const PORT = process.env.PORT || 3001;
// start the api SERVER
app.listen(PORT, function(){
    console.log(`🌎, ==> API Server now listening on PORT ${PORT}!`);
});