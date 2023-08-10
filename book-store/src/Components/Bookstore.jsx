import React, { useState } from 'react'
import Searchbar from './Bookstore/Searchbar'
import Booklist from './Bookstore/Booklist'
import Dropdown from './Bookstore/Dropdown'
import AddBookForm from './Bookstore/Addbook'

const Bookstore = ({ sendData }) => {
  // console.log(sendData,"shjdfgsferyufgerfh")
  const [filterBook, setFilterBook] = useState(sendData);
  const [seBook, setSeBook] = useState('');

  const handleSearch = (searchbook) => {
    const filtered = sendData.filter((book) => (
      book.title.toLowerCase().includes(searchbook.toLowerCase())
    ));
    setFilterBook(filtered);
  }
  // console.log("filtered", filterBook)

  const handleBook = (selectedBook) => {
    const bookSelected = sendData.filter((book) => (
      book.title.toLowerCase().includes(selectedBook.toLowerCase())
    ))
    setSeBook(bookSelected)
  }

  // ............Add Book.................
  const [books, setBooks] = useState([]);
  const addBooks = (bookData) => {
    fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
    .then(response => response.json())
    .then(data => setBooks([...books, data]))
  };

  return (
    <div className='bookstore'>
      <h1>Book Store</h1>
      <Searchbar onSearch={handleSearch} />
      <AddBookForm addBook={addBooks}/>
      <Dropdown onSearch={handleBook} />
      <Booklist books={filterBook} seabook={seBook} />
    </div>
  )
}

export default Bookstore;