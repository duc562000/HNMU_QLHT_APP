import { PostLogin, PostData, GetData, PostFormData, PutData } from "../helpers";

import url from "../url";

export const loginApi = async (body) =>
  GetData(url.urllogin, body)
    .then((res) => res)
    .catch((err) => err);
export const editUserApi = async (body) =>
PutData(url.urlEdit,body)
  .then((res) => res)
  .catch((err) => err);
export const provinceApi = async (body) =>
  GetData(url.urlTinh,body)
    .then((res) => res)
    .catch((err) => err);
// export const getListNews = async (body) =>
//   GetData(url.urlListUsers, body)
//     .then((res) => res)
//     .catch((err) => err);

// export const changePassword = async (body) =>
//   PostData(url.urlChangePassword, body)
//     .then((res) => res)
//     .catch((err) => err);

// export const TestAPI = async (body) =>
//   GetData("https://pokeapi.co/api/v2/pokemon/ditto", {})
//     .then((res) => res)
//     .catch((err) => err);
