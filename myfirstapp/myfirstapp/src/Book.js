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
export default Book;
