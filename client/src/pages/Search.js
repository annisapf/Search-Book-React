import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Container from "../components/Container/Container"
import { Input, FormBtn } from "../components/Form/Form"
import Card from "../components/Card/Card"
import { SuccessAlert } from "../components/Alert/Alert"
import $ from "jquery"

function Search() {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  function searchBooks(query) {

  };

  function handleInputChange(event) {
    const { value } = event.target;
    // console.log(value);
    setSearch(value)
  };

  function handleFormSubmit(event) {
    event.preventDefault();

  };

  function handleButtonClick(event) {
    event.stopPropagation()

    if (event.currentTarget.name === "save") {
      // console.log("clicked save");      
    }
  }

  function saveBook() {
  
  }

  return (
    <>
      <Navbar />

      <Jumbotron />

      <Container>
        <h1>Book Search</h1>
        <form>
          <Input onChange={handleInputChange} name="title" value={search} />
          <FormBtn onClick={handleFormSubmit}>
            Submit
          </FormBtn>
        </form>
      </Container>

      <Container>
        <br/>
        
      </Container>
    </>
  )
}


export default Search;
