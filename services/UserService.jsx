import axios from "axios";
import Cookies from "js-cookie";
export const getUser = async () => {
  const data = await axios
    .get("http://127.0.0.1:8000/api/user", {
      headers: {
        token: Cookies.get("token"),
        accept: "application/json",
      },
    })
    .then((res) => {
      return res.data.data;
    });
  return data;
};
export const updateUser = async (dataUser, dataProfile) => {
  const data = await axios.post("http://127.0.0.1:8000/api/user").then((res) => {
    return res.data.data;
  });
  return data;
};