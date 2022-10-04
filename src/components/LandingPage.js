import NavBar from "./NavBar";
import Home from "../assets/images/home.png";
import styled from "@emotion/styled";
import { fonts, typography } from "../styles/typography";
import { colors } from "../styles/colors";
import SearchForm from "./SearchForm";

const SectionOne = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`;

const SectionBackground = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${fonts.primary};
  ${typography.headline[2]};
  color: ${colors.secondary[700]};
  height: 88px;
`;

const SubTitleSection = styled.span`
  ${typography.headline[5]};
  color: ${colors.secondary[600]};
  margin-bottom: 4rem;
`;

function LandingPage() {
  return (
    <>
      <NavBar />
      <SectionOne>
        <SectionBackground src={Home} alt="Home" />
        <TitleSection>
          Meet your new Home
          <SubTitleSection>
            The easiest way to find where you belong
          </SubTitleSection>
          <SearchForm />
        </TitleSection>
      </SectionOne>
    </>
  );
}

export default LandingPage;
