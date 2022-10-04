import styled from "@emotion/styled";
import IconHome from "../assets/icons/LogoHome.png";
import { fonts, typography } from "../styles/typography";
import { FiSearch } from "react-icons/fi";
import { RiUserReceivedLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { colors } from "../styles/colors";
import { boxShadow } from "../styles/utils";

const NavBarContainer = styled.div`
  position: relative;
  ${boxShadow[1]};
  z-index: 1;
`;

const ContainerNavBar = styled.div`
  font-family: ${fonts.secondary};
  ${typography.button};
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 0.625rem;
  justify-content: space-between;
  align-items: center;
`;

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
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <ContainerNavBar>
        <img src={IconHome} alt="Logo Home" />
        <ButtonsNavBar>
          <FindHome>
            <FiSearch />
            FIND A HOME
          </FindHome>
          <ButtonJoin>
            <AiOutlineUserAdd />
            JOIN
          </ButtonJoin>
          <ButtonLogin>
            <RiUserReceivedLine />
            LOGIN
          </ButtonLogin>
        </ButtonsNavBar>
      </ContainerNavBar>
    </NavBarContainer>
  );
}

export default NavBar;
