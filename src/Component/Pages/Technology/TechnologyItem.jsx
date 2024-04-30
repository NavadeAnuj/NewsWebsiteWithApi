import React from "react";
import { Button, Card } from "react-bootstrap";

const TechnologyItem = ({ title, description, image_url, src }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 col-md-3"
    >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title.slice(0, 50)}</Card.Title>
        <Card.Text>{description ? description.slice(0, 90) : "..."}</Card.Text>
        <Button variant="primary" href={src}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TechnologyItem;
