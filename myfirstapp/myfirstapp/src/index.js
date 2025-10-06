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
      <EventExample />
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

const EventExample = () => {
const handleFormInput = (e) => {
  console.log(e.targegt);

  }
  const handleButtonClick = (e) => {
    alert("Button clicked");
    console.log("Button clicked");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

    return (
      <section>
        <form action="" className="form" >
          <h2>Events in React</h2>
          <input type="text" name="example" id="" onChange={handleFormInput}  />
          <button type="submit" onClick={handleFormSubmit}>
            Submit
          </button>
          <div>
          <button type="button" onClick={handleButtonClick}>
            Click Me
          </button>
          </div>
        </form>
      </section>
    );
  };    

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

