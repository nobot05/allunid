import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
const tokenKey = "token";

const setToken = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

const getUser = () => {
    try {
        const token = getToken();
        console.log("Le User:",token);
    const user = jwtDecode(token);
    return user;
    } catch(err) {
        console.log("Error!:",err);
        return undefined;
    }
}

export default {
  setToken,
  getToken,
  removeToken,
  getUser
};