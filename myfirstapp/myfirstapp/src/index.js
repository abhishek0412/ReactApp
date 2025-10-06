import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Greeting() {
  return (<React.Fragment>
      <BookList />
  </React.Fragment>);
}

/*   function Greeting() {
    return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
  } */

/* const Person = () => {return <h1>First Component!</h1>;};
const Message = () => {return <h2>This is my message</h2>}; */
const someFunc = (param1, param2) => {
    console.log(param1, param2);
  }
someFunc("Hello", 23);

function BookList() {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  );
}

/* const Image = () => {
  return (
    <img className="book-image" src="./images/book.jpg" alt="Random Picsum Image" />
  );
}
const Author = () => <h4>Abhishek Choudhary</h4>;

const Title = () => <h2>Title</h2>; */

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



  const Book = ({ img, title, author }) => {
  return (
    <article className="book">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author.toUpperCase()}</h4>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

