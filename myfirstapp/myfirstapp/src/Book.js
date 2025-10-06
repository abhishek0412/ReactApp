const Book = (props) => {
  const { img, title, author, getBook, id, number } = props;

  const getSingleBook = () => {
    getBook(id);
  };

  console.log(number);

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
      <span className="number">{number}</span>
    </article>
  );
};
export default Book;
