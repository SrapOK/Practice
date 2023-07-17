import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { CURRENT_DAY_ID, USER_ROUTE } from "../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { createAttendance } from "../http/attendanceAPI";
import { setAttendance } from "../store/slices/staffSlice";

const StaffItem = ({ name, middle_name, surname, id, role, additional }) => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staffSlice.staff);
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.userSlice.user.role);
  const currentTime = new Date();
  const employee = staff.find((item) => item.id === id);

  const lastAtt = useSelector((state) => state.attendanceSlice.attendances)
    .filter((item) => item.staffId == id && item.workdayId === CURRENT_DAY_ID)
    .at(-1);

  if (lastAtt) {
    if (lastAtt.type === "in") dispatch(setAttendance({ id, value: true }));
    else if (lastAtt.type === "out")
      dispatch(setAttendance({ id, value: false }));
  }

  const createNewAttendance = async (type, workdayId) => {
    try {
      await createAttendance(currentTime.getHours(), type, workdayId, id);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <ListGroup.Item className="p-3 ">
      <Container className="d-flex justify-content-between align-items-center">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate(USER_ROUTE + "/" + id)}
        >
          {`${surname} ${name} ${middle_name}`}
          <div>{`${role}, ${additional}`}</div>
        </div>
        {userRole === "ADMIN" || userRole === "USER" ? (
          <div>
            <Button
              onClick={() => {
                createNewAttendance("in", CURRENT_DAY_ID);
              }}
              variant="success"
            >
              Вошёл
            </Button>
            <Button
              className="mx-4"
              variant="outline-warning"
              onClick={() => {
                createNewAttendance("out", CURRENT_DAY_ID);
              }}
            >
              Вышел
            </Button>
          </div>
        ) : (
          <div>{employee.attendance ? "Присутствует" : "Отсутствует"}</div>
        )}
      </Container>
    </ListGroup.Item>
  );
};

export default StaffItem;
