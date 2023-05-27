import axios from "axios";

export const getProfileByUserId = async (id) => {
  const data = await axios
    .get(`http://127.0.0.1:8000/api/profile/${id}`, {
      headers: {
        accept: "application/json",
      },
    })
    .then((res) => {
      return res.data.data;
    });
  return data;
};
export const updateProfileByUserId = async (user_id, dataProfile) => {
  const data = await axios
    .post(`http://127.0.0.1:8000/api/profile/${user_id}`, dataProfile)
    .then((res) => {
      return res.data.data;
    });
  return data;
};
