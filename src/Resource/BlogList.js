import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../css/cards.css";
import initialCards from "../data/allBlog.TitleData";

export default function AllBlogs() {
  const [cards] = useState(initialCards);
  const [visibleCards, setVisibleCards] = useState(6);

  const loadMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  return (
    <div>
      <Container>
        <Row>
          {cards.slice(0, visibleCards).map((card) => (
            <Col key={card.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="title-card">
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <h5 className="head-Title">{card.title}</h5>
                  <Card.Text style={{ fontFamily: "Arial" }}>
                    {card.description}
                  </Card.Text>
                  <p>
                    <Link to={card.blogUrl} className="read-more-button">
                      Read More
                    </Link>
                  </p>
                  <hr />
                  <p className="">
                    Author:
                    <Link to="/" style={{ textDecoration: "none" }}>
                      {card.authorName}
                    </Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {visibleCards < cards.length && (
          <div className="text-center mt-4">
            <Button onClick={loadMore} variant="primary">
              Load More
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
