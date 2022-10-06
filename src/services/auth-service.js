import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function login(credentials) {
  return apiFetch("/auth/sign_in", { body: credentials }).then((u) => {
    const { token, ...user } = u;
    console.log(token)
    sessionStorage.setItem(tokenKey, JSON.stringify(token));

    return user;
  });
}

export function logout() {
  return apiFetch("/auth/sign_out", { method: "DELETE" });
}
