import { typography } from "../styles/typography";
import { RiHome8Line } from "react-icons/ri";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const ButtonsNavBar = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonJoin = styled.button`
  ${typography.button};
  background: ${colors.secondary[200]};
  border: 1px solid ${colors.primary[300]};
  border-radius: 16px;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: rgba(244, 143, 177, 0.15);
  }
`;

const ButtonLogin = styled.button`
  ${typography.button};
  background: ${colors.primary[300]};
  border-radius: 16px;
  border: 1px solid ${colors.primary[300]};
  color: ${colors.secondary[200]};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[400]};
    border: 1px solid ${colors.primary[400]};
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.secondary[200]};
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

function LandLordLayout() {
  const { logout } = useAuth();

  return (
    <ButtonsNavBar>
      <ButtonJoin onClick={logout}>
        <AiOutlineLogout />
        LOGOUT
      </ButtonJoin>
      <ButtonLogin>
        <StyledNavLink to="/myproperties">
          <RiHome8Line />
          MY PROPERTIES
        </StyledNavLink>
      </ButtonLogin>
      <ButtonLogin>
        <StyledNavLink to="/profile">
          <AiOutlineUser />
          PROFILE
        </StyledNavLink>
      </ButtonLogin>
    </ButtonsNavBar>
  );
}

export default LandLordLayout;
