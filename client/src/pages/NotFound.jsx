import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomLink from "../components/CustomLink";
import { STAFF_ROUTE } from "../utils/consts";

const NotFound = () => {
  return (
    <Card className="text-center">
      <Card.Header className="pt-5"></Card.Header>
      <Card.Body>
        <Card.Title mt>Упс!</Card.Title>
        <Card.Text>Что-то пошло не так, этой страницы не существует;</Card.Text>
        <div className="d-grid gap-3">
          <CustomLink variant="outline-primary" to={STAFF_ROUTE}>
            Вернуться на главную!
          </CustomLink>
        </div>
      </Card.Body>
      <Card.Footer className="pb-5"></Card.Footer>
    </Card>
  );
};

export default NotFound;
