import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = (e) => {};
  const complexExample = () => {
    console.log(author);
  };
  return (
    <article className="book">
      <img className="bookimage" src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}></button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex
      </button>
    </article>
  );
};

export default Book;
