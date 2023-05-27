import axios from "axios";
import Cookies from "js-cookie";

export async function getPostAll() {
  const data = await axios
    .get("http://127.0.0.1:8000/api/post", {
      headers: {
        token: Cookies.get("token"),
        accept: "application/json",
      },
    })
    .then((res) => {
      return res.data.data;
    });

  return data;
}
export async function getPostUserId() {
  const data = await axios
    .get("http://127.0.0.1:8000/api/post", {
      headers: {
        token: Cookies.get("token"),
        accept: "application/json",
      },
    })
    .then((res) => {
      return res.data.data;
    });

  return data;
}
export async function addPost(data) {
  const newData = data;
  axios
    .post("http://127.0.0.1:8000/api/post", newData, {
      headers: {
        token: Cookies.get("token"),
        accept: "application/json",
      },
    })
    .then((res) => {});
}
