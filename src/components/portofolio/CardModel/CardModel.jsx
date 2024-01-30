import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LocalImage from "../../../assets/images/placeholder-image-card.png";


const CardModel = (props) => {
  return (
    <React.Fragment>
      <Card style={{ width: "18rem" }} className={props.identifier}>
        <Card.Img variant="top" src={LocalImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardModel;
