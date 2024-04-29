import Axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { defaults } from "autoprefixer";

const baseURL = getFirestore;


console.log(baseURL)


export function AxiosJSON() {
  const axios = Axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return axios;
}
export function AxiosFormData() {
  const axios = Axios.create({
    baseURL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return axios;
}