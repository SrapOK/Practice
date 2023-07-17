import React from "react";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { createEmployee } from "../http/StaffAPI";
import { useState } from "react";

const Admin = () => {
  const [Name, setName] = useState("");
  const [Surmane, setSurname] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [Role, setRole] = useState("student");
  const [Additional, setAdditional] = useState("");

  const addNewEmployee = (Name, MiddleName, Surmane, Role, Additional) => {
    try {
      const res = createEmployee(Name, MiddleName, Surmane, Role, Additional);
    } catch (e) {
      alert(e.respose.data.message);
    }
  };

  return (
    <div className=" d-flex justify-content-center align-items-center mt-5">
      <Row style={{ width: "18rem" }}>
        <Form.Control
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <Form.Control
          value={MiddleName}
          onChange={(e) => setMiddleName(e.target.value)}
          className="mt-3"
          type="text"
          placeholder="Minnde name"
        />

        <Form.Control
          value={Surmane}
          onChange={(e) => setSurname(e.target.value)}
          className="mt-3"
          type="text"
          placeholder="Surname"
        />

        <Form.Select
          value={Role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-3"
          aria-label="Student"
          defaultValue={1}
        >
          <option value="student">student</option>
          <option value="teacher">teacher</option>
          <option value="employee">employee</option>
        </Form.Select>

        <Form.Control
          value={Additional}
          onChange={(e) => setAdditional(e.target.value)}
          className="mt-3"
          type="text"
          placeholder="Additional"
        />
        <Button
          onClick={() =>
            addNewEmployee(Name, MiddleName, Surmane, Role, Additional)
          }
          className="mt-3"
          variant="outline-success"
        >
          Добавить
        </Button>
      </Row>
    </div>
  );
};

export default Admin;
