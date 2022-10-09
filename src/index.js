import React from "react";
import ReactDOM from "react-dom/client";

//css
import "./index.css";

import { books } from "./books";
import Book from "./Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);

function Booklist() {
  return (
    <div>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </section>
    </div>
  );
}
