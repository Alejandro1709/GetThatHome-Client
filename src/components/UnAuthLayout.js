import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { RiUserReceivedLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { colors } from "../styles/colors";
import { NavLink } from "react-router-dom";

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
  color: ${colors.secondary[600]};
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;


function UnAuthLayout({ onLoginClick }) {
  return (
    <ButtonsNavBar>
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
