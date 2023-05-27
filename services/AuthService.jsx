import axios from "axios";
import Cookies from "js-cookie";
export const login = async (data) => {
  await axios.post("http://127.0.0.1:8000/api/login", data).then((res) => {
    const token = res.data.token;
    const user_id = res.data.user_id;
    if (token) {
      Cookies.set("token", token);
      Cookies.set("user_id", user_id);
      window.location.href = "./";
    } else {
      alert(res.data.message);
    }
  });
};
export const logout = async () => {
  Cookies.remove("token");
  window.location.href = "/login";
};
export const UserRegister = (dataUser, dataProfile) => {
  const addDataToUserTable = async (callback) => {
    await axios
      .post("http://127.0.0.1:8000/api/register", dataUser)
      .then((res) => {
        callback();
        alert("đăng ký tài khoản thành công");
        window.location.href = "/login";
      })
      .catch((res) => {
        alert("đăng ký tài khoản thất bại");
        console.log(res);
      });
  };
  const addDataToProfileTable = async () => {
    await axios.post("http://127.0.0.1:8000/api/profile", dataProfile);
  };
  addDataToUserTable(addDataToProfileTable);
};
