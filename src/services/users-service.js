import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function createUser(userData) {
  return apiFetch("/auth", { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, JSON.stringify(token));
    return user;
  });
}

export function updateUser(userData) {
  return apiFetch("/auth", { method: "PATCH", body: userData }).then((u) => {
    const { token, ...user } = u;
    return user;
  });
}

export function showUser(id) {
  return apiFetch("/users/" + id).then((data) => {
    return data;
  });
}

export function getUser() {
  return apiFetch("/profile").then((u) => {
    const { token, ...user } = u;
    return user;
  });
}
