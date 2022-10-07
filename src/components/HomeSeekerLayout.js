import { typography } from "../styles/typography";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLogout, AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { colors } from "../styles";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const ButtonsNavBar = styled.div`
  display: flex;
  gap: 1rem;
`;

const FindHome = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 10.5rem;
  gap: 0.5rem;
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
  cursor: pointer;
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
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.secondary[200]};
`;

function HomeSeekerLayout() {
  const { logout } = useAuth();

  return (
    <ButtonsNavBar>
      <FindHome>
        <FiSearch />
        FIND A HOME
      </FindHome>
      <ButtonJoin onClick={logout}>
        <AiOutlineLogout />
        LOGOUT
      </ButtonJoin>
      <ButtonLogin>
        <StyledNavLink to="/saved">
          <AiFillHeart />
          SAVED PROPERTIES
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

export default HomeSeekerLayout;
