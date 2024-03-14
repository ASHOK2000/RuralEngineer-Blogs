import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import initialCards from "./../data/allBlog.TitleData";
import { Link } from "react-router-dom";

export default function TopThreeBlog() {
  const [cards, setCards] = useState(initialCards);

  const [visibleCards, setVisibleCards] = useState(3);
  const loadMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  return (
    <Container>
      <div className="mt-5 ">
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
                      RuralEngineer:
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
            <div className="text-center mt-4 mb-5">
              <Button onClick={loadMore} variant="primary">
                Load More
              </Button>
            </div>
          )}
        </Container>
      </div>
    </Container>
  );
}
