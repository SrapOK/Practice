import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import StaffList from "../components/StaffList";
import { fetchWorkday } from "../http/workdayAPI";
import { useDispatch } from "react-redux";
import { setWorkday } from "../store/slices/workdaySlice";
import { fetchStaff } from "../http/StaffAPI";
import { setStaff } from "../store/slices/staffSlice";

import { fetchAttendance } from "../http/attendanceAPI";
import { setAttendances } from "../store/slices/attendanceSlice";

const Staff = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchWorkday().then((data) => dispatch(setWorkday(data)));
  }, []);

  useEffect(() => {
    fetchAttendance().then((data) => dispatch(setAttendances(data)));
  }, []);

  useEffect(() => {
    fetchStaff().then((data) => {
      dispatch(setStaff(data));
    });
  }, []);

  return (
    <Container>
      <Row>
        <StaffList />
      </Row>
    </Container>
  );
};

export default Staff;
