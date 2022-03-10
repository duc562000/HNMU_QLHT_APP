import { GetData, PostData, PostFormData } from "../helpers";
import url from "../url";

export const getPackageListAPI = async () =>
  PostData(url.getPackageList, { isActive: "Y" })
    .then((res) => res)
    .catch((err) => err);

export const uploadFile = async (data) =>
  PostFormData(url.uploadFile, data)
    .then((res) => res)
    .catch((err) => err);

export const getStaticPage = async (params) =>
  PostData(url.getStaticPage, params)
    .then((res) => res)
    .catch((err) => err);

export const caculateBenifit = async (params) =>
  PostData(url.caculateBenifit, params)
    .then((res) => res)
    .catch((err) => err);
