import { $authHost, $host } from ".";

export const fetchWorkday = async (date) => {
  const { data } = await $host.get("api/workday/");
  return data;
};
