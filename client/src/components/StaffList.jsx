import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/esm/Row";
import StaffItem from "./StaffItem";
import ListGroup from "react-bootstrap/ListGroup";

const StaffList = () => {
  const staff = useSelector((state) => state.staffSlice.staff);
  console.log(staff);

  return (
    <Row className="mt-5">
      <ListGroup>
        {staff.map((employee) => (
          <StaffItem key={employee.id} {...employee} />
        ))}
      </ListGroup>
    </Row>
  );
};

export default StaffList;
