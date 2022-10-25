import styled from "@emotion/styled";
import ReactSwitch from "react-switch";
import IconHome from "../assets/icons/LogoHome.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { fonts, typography } from "../styles/typography";
import { boxShadow } from "../styles/utils";
import HomeSeekerLayout from "./HomeSeekerLayout";
import LandLordLayout from "./LandLordLayout";
import UnAuthLayout from "./UnAuthLayout";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles";
import { useProperties } from "../context/properties-context";
import { useState } from "react";
import { useThemeContext } from "../context/theme-context";

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

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function NavBar({ onLoginClick }) {
  const { changeToDefaultPreferences } = useProperties();
  const { user } = useAuth();

  const { setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };

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

          <ReactSwitch
            checked={checked}
            onChange={handleSwitch}
            onColor={colors.secondary[300]}
            onHandleColor={colors.primary[400]}
            handleDiameter={36}
            uncheckedIcon={false}
            checkedIcon={false}
            checkedHandleIcon={
              <IconContainer>
                <MdDarkMode />
              </IconContainer>
            }
            uncheckedHandleIcon={
              <IconContainer>
                <MdLightMode />
              </IconContainer>
            }
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={36}
            width={50}
            borderRadius={16}
            className="react-switch"
            id="small-radius-switch"
          />
        </BtnContainer>
      </ContainerNavBar>
    </Wrapper>
  );
}

export default NavBar;
