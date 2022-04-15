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
export const huyenApi = async (provinceCode,body) =>
  GetData(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,body)
    .then((res) => res)
    .catch((err) => err);
export const xaApi = async (districtCode,body) =>
  GetData(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,body)
    .then((res) => res)
    .catch((err) => err);
export const DantocApi = async (body) =>
  GetData(url.urlDantoc,body)
    .then((res) => res)
    .catch((err) => err);
export const QuoctichApi = async (body) =>
  GetData(url.urlQuoctich,body)
    .then((res) => res)
    .catch((err) => err);
export const TongiaoApi = async (body) =>
  GetData(url.urlTongiao,body)
    .then((res) => res)
    .catch((err) => err);
