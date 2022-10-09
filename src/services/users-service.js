import apiFetch from "./api-fetch";
import { login } from "./auth-service";

export function createUser(userData) {
  return apiFetch("/auth/sign_up", { body: userData }).then((u) => {
    const {email, password} = userData
    login({email,password})
    return u    
  });
}

export function showUser(id) {
  return apiFetch("/users/"+id).then((data) => {
    return data;
  });
}

export function getUser() {
  return apiFetch("/profile").then((u) => {
    const { token, ...user } = u;
    return user;
  });
}
