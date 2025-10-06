import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book';
import books from './books';
import './index.css';
function Greeting() {
  return (
    <React.Fragment>
      <BookList />
    </React.Fragment>
  );
}

const getBook = (id) => {
  const book = books.find((book) => book.id === id);
  console.log(book);
};
function BookList() {
  return (
    <>
      <h1>Book List</h1>
      <section className="booklist">{bookNames}</section>
    </>
  );
}

const bookNames = books.map((book) => {
  console.log(book);
  return <Book {...book} key={book.id} getBook={getBook} number={book.id} />;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
