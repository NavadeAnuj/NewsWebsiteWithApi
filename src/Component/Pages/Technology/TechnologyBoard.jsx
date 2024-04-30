import React, { useEffect, useState } from "react";
import TechnologyItem from "./TechnologyItem";
import { Row } from "react-bootstrap";

const TechnologyBoard = () => {
  const [articles, setArticle] = useState([]);
  let url = `https://newsdata.io/api/1/news?apikey=pub_42603ed58b51cdcfd7d91d73cb397a43901c2&q=news&country=in `;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {articles.map((news, index) => {
          return (
            <TechnologyItem
              key={index}
              title={news.title}
              description={news.description}
              urlToImage={news.image_url}
              src={news.src}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default TechnologyBoard;
