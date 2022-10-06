import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { FiSearch } from "react-icons/fi";
import { RiUserReceivedLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { colors } from "../styles/colors";
import { NavLink } from "react-router-dom";

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
  color: ${colors.secondary[600]};
`;

function UnAuthLayout({ onLoginClick }) {
  return (
    <ButtonsNavBar>
      <FindHome>
        <FiSearch />
        FIND A HOME
      </FindHome>
      <ButtonJoin>
        <StyledNavLink to="/signup">
          <AiOutlineUserAdd />
          JOIN
        </StyledNavLink>
      </ButtonJoin>
      <ButtonLogin onClick={onLoginClick}>
        <RiUserReceivedLine />
        LOGIN
      </ButtonLogin>
    </ButtonsNavBar>
  );
}

export default UnAuthLayout;
