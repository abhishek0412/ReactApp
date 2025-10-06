import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books';
import Book from './Book';
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
  return <section className="booklist">{bookNames}</section>;
}

const bookNames = books.map((book) => {
  return <Book {...book} key={book.id} getBook={getBook} />;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
