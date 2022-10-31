import React from "react";

import Card from "react-bootstrap/Card";

function Carduser({ el }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.img} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.age},{el.profesion}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carduser;
