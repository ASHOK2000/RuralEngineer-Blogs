import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CardList = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Card style={{ width: "19rem" }}>
      <Card.Header>
        <h4>In This Article</h4>
      </Card.Header>
      <ListGroup variant="flush">
        {data.map((item, index) => (
          <div
            className="card"
            key={index}
            onClick={() => scrollToSection(`section${index + 1}`)}>
            <h6>
              <ListGroup.Item>{item.title}</ListGroup.Item>
            </h6>
          </div>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CardList;
