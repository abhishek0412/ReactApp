import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Greeting() {
  return (<React.Fragment>
      <BookList />
  </React.Fragment>);
}

function BookList() {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} children={<div><p>This is a great book!</p> <button>click me!</button></div>} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  );
}

const firstBook = {
  img: "./images/book.jpg",
  title: "Title Abhishek",
  author: "Abhishek Choudhary"
};

const secondBook = {
  img: "./images/book.jpg",
  title: "Title Supriya",
  author: "Supriya Moond"
};



  const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author.toUpperCase()}</h4>
    {children}
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

