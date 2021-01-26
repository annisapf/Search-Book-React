import axios from "axios";

export function search(query) {
  return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
};

function saveBook (bookData) {
  return axios.post("/api/books/", bookData);
}

export function getBook (){
  return axios.get("/api/books/");
}

export function getBooks (){
  return axios.get("/api/books/");
}

export function deleteBook (id){
    return axios.delete("/api/books/" + id)
}


const API = {
 search,
 saveBook,
 getBook,
 getBooks,
 deleteBook,
}; 

export default API