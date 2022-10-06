import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function createUser(userData) {
  return apiFetch("/users", { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export function updateUser(userData) {
  return apiFetch("/profile", { method: "PATCH", body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export function getUser() {
  return apiFetch("/profile").then((u) => {
    const { token, ...user } = u;
    return user;
  });
}
