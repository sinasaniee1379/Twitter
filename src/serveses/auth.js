import { GetAxios, GetAxiosApi, GetAxiosAuth } from "./api";
export const LoginApi = (user, callback) => {
  GetAxiosAuth()
    .post("login", user)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err.response.data.message);
    });
};

export const RegisterApi = (user, callback) => {
  GetAxiosAuth()
    .post("register", user)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err.response.data.message);
    });
};

export const UserUploadImg = (photo, callback) => {
  GetAxiosApi()
    .post("uploadUserPhoto", photo)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err.response.data.message);
    });
};
export const getProfileReq = (callback) => {
  GetAxiosApi()
    .get("getProfile")
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err.response.data.message);
    });
};
export const LikeTwittApi = (id, callback) => {
  GetAxiosApi()
    .get("likeTweet/" + id)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err.response.data.message);
    });
};
