import React from "react";

const Article = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>

      <br />
      <p>{props.text}</p>
      <br />
      <p className="author">{props.author}</p>
      <br />
      <hr />
      <br />
    </article>
  );
};

export default Article;
