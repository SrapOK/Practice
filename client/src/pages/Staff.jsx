import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import StaffList from "../components/StaffList";

const Staff = () => {
  return (
    <Container>
      <Row>
        <StaffList />
      </Row>
    </Container>
  );
};

export default Staff;
