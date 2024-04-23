import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HealthItem from "./HealthItem";

const HealthBoard = () => {
  const [health, setHealth] = useState([]);
  let url = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=ab15b3af548b420d85929f7c35af305d`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHealth(data.articles))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {health.map((news, index) => {
          return (
            <HealthItem
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

export default HealthBoard;
