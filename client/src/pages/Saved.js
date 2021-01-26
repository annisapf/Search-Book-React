import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Container from "../components/Container/Container"
import Card from "../components/Card/Card"

function Saved() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    loadSavedBooks()
  }, [])

  function loadSavedBooks() {
  }

  function handleButtonClick() {
 
  }
  

  function deleteBook() {
  }

  return (
    <>
      <Navbar />

      <Jumbotron />

      <Container>
        <h1>Saved Books</h1>
         
      </Container>
    </>
  )
  }


export default Saved;


