import styled from "@emotion/styled";
import IconHome from "../assets/icons/LogoHome.png";
import { fonts, typography } from "../styles/typography";
import { boxShadow } from "../styles/utils";
import HomeSeekerLayout from "./HomeSeekerLayout";
import LandLordLayout from "./LandLordLayout";
import UnAuthLayout from "./UnAuthLayout";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles";
import { FiSearch } from "react-icons/fi";
import { useProperties } from "../context/properties-context";

const Wrapper = styled.div`
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

const BtnContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;
const FindHome = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 10.5rem;
  gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.secondary[600]};
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ButtonSearch = styled.p`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

function NavBar({ onLoginClick }) {
  const { changeToDefaultPreferences } = useProperties();
  const { user } = useAuth();

  function deciderFunction() {
    if (user) {
      if (user.role_name === "Homeseeker") {
        return <HomeSeekerLayout />;
      } else if (user.role_name === "Landlord") {
        return <LandLordLayout />;
      }
    } else {
      return <UnAuthLayout onLoginClick={onLoginClick} />;
    }
  }

  return (
    <Wrapper>
      <ContainerNavBar>
        <NavLink to="/">
          <img src={IconHome} alt="Logo Home" />
        </NavLink>
        <BtnContainer>
          <FindHome>
            <StyledNavLink
              onClick={changeToDefaultPreferences}
              to="/properties"
            >
              <FiSearch />
              <ButtonSearch>FIND A HOME</ButtonSearch>
            </StyledNavLink>
          </FindHome>
          {deciderFunction()}
        </BtnContainer>
      </ContainerNavBar>
    </Wrapper>
  );
}

export default NavBar;
