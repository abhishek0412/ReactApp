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

const Person = () => {return <h1>First Component!</h1>;};
const Message = () => {return <h2>This is my message</h2>};

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Image = () => {
  return (
    <img className="book-image" src="https://picsum.photos/200" alt="Random Picsum Image" />
  );
}
const Author = () => <h4>Abhishek Choudhary</h4>;

const Title = () => <h2>Title</h2>;

const Book = () => {
  return (
    <div className="book">
      <Title />
      <Author />
      <Image />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

