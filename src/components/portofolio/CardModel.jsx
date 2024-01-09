import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LocalImage from '../../assets/images/placeholder-image-card.png';
import './CardModel.css';

const CardModel = (props) => {
  return (
    <React.Fragment>
  <Card style={{ width: '18rem' }} className="scale-efect">
      <Card.Img variant="top" src={LocalImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </React.Fragment>
  );
}

export default CardModel;  