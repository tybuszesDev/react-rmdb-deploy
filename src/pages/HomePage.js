import React from "react";
import "../styles/HomePage.css";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun ?",
    author: "Jan Nowak.",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aperiam ipsum voluptate neque nostrum modi quod ut. Iusto voluptatem quos facere quas delectus magnam, dolorum eius, voluptates ut vero accusamus.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego ?",
    author: "Tomasz Kowalski.",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum doloribus reprehenderit, voluptatem suscipit blanditiis laudantium consequuntur quas quisquam aut repudiandae ipsam autem deleniti libero esse ?",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia ?",
    author: "Artur Frytka.",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta, voluptatem eveniet, adipisci blanditiis illo dolorum nesciunt fugiat, aliquam illum eligendi corrupti porro quos. Quasi nam sit ipsam temporibus reprehenderit.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => {
    return (
      <Article
        key={article.id}
        title={article.title}
        text={article.text}
        author={article.author}
      />
    );
  });
  return <div className="home">{artList}</div>;
};

export default HomePage;
