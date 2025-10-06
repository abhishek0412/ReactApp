import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
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

const Book = (props) => {
  const { img, title, author, getBook, id } = props;

  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getSingleBook();
        }}
      >
        Click Me
      </button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const bookNames = books.map((book) => {
  return <Book {...book} key={book.id} getBook={getBook} />;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
