import { $authHost, $host } from ".";

export const createEmployee = async (
  name,
  middle_name,
  surname,
  role,
  additional
) => {
  const { data } = await $host.post("api/staff/", {
    name,
    middle_name,
    surname,
    role,
    additional
  });
  return data;
};

export const fetchStaff = async () => {
  const { data } = await $host.get("api/staff/");
  return data;
};
