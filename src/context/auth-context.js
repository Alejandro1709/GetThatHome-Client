import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../services/auth-service";
import { createUser, getUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState("idle");
  const navigate = useNavigate();

  function loadUser() {
    setUserStatus("loading")
    getUser()
    .then((data) => {
      setUser(data);
      setUserStatus("success")
    })
    .catch((error) => console.log(error));
  }

  const loadMemoizedUser = useCallback(loadUser, [])

  useEffect(() => {
    loadMemoizedUser();
  }, [loadMemoizedUser]);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      navigate("/",{replace: true});
    });
  }

  function handleSignup(userData) {
    console.log(userData)
    return createUser(userData).then((user) => {
      setUser(user);
      navigate("/");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      navigate("/");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        status: userStatus,
        login: handleLogin,
        signup: handleSignup,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
