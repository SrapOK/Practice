import { $authHost, $host } from ".";

export const createAttendance = async (time, type, workdayId, staffId) => {
  const { data } = await $authHost.post("api/attendance/", {
    time,
    type,
    workdayId,
    staffId
  });
  return data;
};

export const fetchAttendance = async () => {
  const { data } = await $host.get("api/attendance/");
  return data;
};
