import { RiUserReceivedLine } from "react-icons/ri";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { boxShadow } from "../styles/utils";
import styled from "@emotion/styled";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import LoadingWave from "./LoadingWave";

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24.25rem;
  border: 1px solid #e5e5e5;
  user-select: none;
  background-color: white;
  border-radius: 8px;
  ${boxShadow[1]}
`;

const StyledTitle = styled.h1`
  ${typography.headline[5]}
  margin: 1rem 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const StyledFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 8px 16px;
  border-radius: 16px;
  align-self: center;
  background-color: ${colors.primary[300]};
  color: white;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: ${colors.primary[400]};
  }
`;

function LoginForm({ onLoginClick, handleCloseModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const { login } = useAuth();

  useEffect(() => {
    setError("");
  }, [onLoginClick]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    login(formData)
      .then(() => {
        setStatus("success");
        handleCloseModal();
      })
      .catch((error) => setError(JSON.parse(error.message)));
  }

  return (
    <StyledFormWrapper>
      <StyledTitle>Login</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="user@mail.com"
            label="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            label="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </StyledFormGroup>
        <span style={{ color: "red" }}>{error}</span>
        {status === "loading" && <LoadingWave />}
        <StyledFormButton type="submit">
          <RiUserReceivedLine />
          Login
        </StyledFormButton>
      </StyledForm>
    </StyledFormWrapper>
  );
}

export default LoginForm;
