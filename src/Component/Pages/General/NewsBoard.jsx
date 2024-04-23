import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";

const NewsBoard = ({}) => {
  const ApiKey = "ab15b3af548b420d85929f7c35af305d";
  const [articles, setArticle] = useState([]);
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ab15b3af548b420d85929f7c35af305d`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
      {articles.map((news, index) => {
        return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              urlToImage={news.urlToImage}
              src={news.src}
            />
        
        );
      })}
      </Row>
    </div>
  );
};

export default NewsBoard;
