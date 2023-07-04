import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { USER_ROUTE } from "../utils/consts";

const StaffItem = ({ name, middlename, surname, id, ...props }) => {
  const navigate = useNavigate();
  return (
    <ListGroup.Item className="p-3">
      <Container className="d-flex justify-content-between align-items-center">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate(USER_ROUTE + "/" + id)}
        >{`${surname}, ${name}, ${middlename}`}</div>
        <div>
          <Button variant="success">Вошёл</Button>
          <Button className="mx-4" variant="outline-warning">
            Вышел
          </Button>
        </div>
      </Container>
    </ListGroup.Item>
  );
};

export default StaffItem;
