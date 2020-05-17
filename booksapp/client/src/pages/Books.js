import React, { useState, useEffect } from 'react';
import DeleteBtn from "../components/DeleteBtn";
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Forms';

function Books() {
    const [books, setBooks] = useState([])
    const [formObject, setFormobject ] = useState({})

    useEffect(() => {
        loadBooks()
    }, [])

    // loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => 
                setBooks(res.data)
            ).catch(err => console.log(err));
    };

    // deletes a book from the database with a given ID and reloads books from the database
    function deleteBook(id) {
        API.deleteBook(id) 
            .then(res => loadBooks())
            .catch(err => console.log(err));
    };

    // handles updating the component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormobject({...formObject, [name]: value})
    };
    
     // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();

        if(formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis,
            })
            .then(res => loadBooks())
            .catch(err => console.log(err))
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">

                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="author"
                            placeholder="author (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="synopsis"
                            placeholder="synopsis (required)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick = {handleFormSubmit}
                        >
                        Submit Book
                        </FormBtn>
                    </form>

                </Col>
            </Row>
        </Container>
    )
    
}

export default Books