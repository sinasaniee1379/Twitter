import { GetAxios, GetAxiosApi } from "./api";
export const ApiTwitt = (callback) => {
  GetAxiosApi()
    .post("/getAllTweet")
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err);
    });
};

export const GettweetByHashTagsReq = (hashtag, callback) => {
  GetAxiosApi()
    .post("/getAllTweet", { hashtag })
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err);
    });
};

export const getHashTags = (callback) => {
  GetAxiosApi()
    .get("getAllHashTags")
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      callback(false, err);
      console.log(err);
    });
};

export const getUser = (callback) => {
  GetAxiosApi()
    .get("getAllUser")
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      callback(false, err);
      console.log(err);
    });
};

export const NewTwittReq = (data, callback) => {
  GetAxiosApi()
    .post("newTweet", data)
    .then((res) => {
      const data = res.data;
      callback(true, data);
    })
    .catch((err) => {
      console.log(err);
      callback(false, err);
    });
};
