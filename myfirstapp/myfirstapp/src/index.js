import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
function Greeting() {
  return (<React.Fragment>
      <BookList />
  </React.Fragment>);
}

function BookList() {
  return (
    <section className="booklist">
     {bookNames}
    </section>
  );
}

const books = [
  {
    img: "./images/book.jpg",
    title: "Title Abhishek",
    author: "Abhishek Choudhary",
    id: uuidv4()
  },
  {
    img: "./images/book.jpg",
    title: "Title Supriya",
    author: "Supriya Moond",
    id: uuidv4()
  }
];


  const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author.toUpperCase()}</h4>
    </article>
  );
}

const bookNames = books.map((book) => {
  return <Book {...book} key={book.id} />;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

