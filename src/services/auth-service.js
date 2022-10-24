import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function login(credentials) {
  return apiFetch("/auth/sign_in", { body: credentials }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, JSON.stringify(token));

    return user;
  });
}

export function logout() {
  return apiFetch("/auth/sign_out", { method: "DELETE" });
}

// export async function signup(newUser) {
//   const { token, ...user } = await apiFetch("signup", { body: newUser });
//   sessionStorage.setItem(tokenKey, token);
//   return user;
// }
