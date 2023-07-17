import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { CURRENT_DAY_ID } from "../utils/consts";

const User = () => {
  const staff = useSelector((state) => state.staffSlice.staff);
  const id = Number(useParams().id);
  let late = null;

  const currentTime = new Date().getHours();

  const workday = useSelector((state) => state.workdaySlice.workday).find(
    (item) => item.id === CURRENT_DAY_ID
  );

  const lastAtt = useSelector((state) => state.attendanceSlice.attendances)
    .filter((item) => item.staffId == id && item.workdayId === CURRENT_DAY_ID)
    .at(-1);
  const employee = staff.find((item) => item.id === id);

  if (lastAtt == undefined) {
    if (Number(currentTime) > Number(workday.start)) {
      const diff = Number(currentTime) - Number(workday.start);
      if (diff > 0) late = diff;
    }
  } else if (lastAtt.type === "in") {
    const diff = Number(lastAtt.time) - Number(workday.start);
    if (diff > 0) late = diff;
  } else if (
    lastAtt.type === "out" &&
    Number(workday.end) > Number(lastAtt.time)
  ) {
    const diff = Number(currentTime) - Number(workday.start);
    if (diff > 0) late = diff;
  }

  return (
    <div>
      <Container className="mt-5  d-flex justify-content-between align-items-center">
        <div style={{ cursor: "pointer" }}>
          {`${employee.surname} ${employee.name} ${employee.middle_name} ${employee.role}, ${employee.additional}`}
        </div>
        <div>{employee.attendance ? "Присутствует" : "Отсутствует"}</div>
        <div>{late != null ? `Опоздание на ${late} ч.` : ""}</div>
      </Container>
    </div>
  );
};

export default User;
