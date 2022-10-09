import Home from "../assets/images/home.png";
import ListHome from "../assets/videos/listHouses.mp4";
import { fonts, typography } from "../styles/typography";
import { colors } from "../styles/colors";
import SearchForm from "../components/SearchForm";
import LayoutCase from "../components/LayoutCase";
import SignUpHero from "../components/SignUpHero";
import TeamSection from "../components/TeamSection";
import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";

const SectionOne = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`;

const SectionBackground = styled.video`
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
  color: ${colors.secondary[200]};
  height: 88px;
`;

const SubTitleSection = styled.span`
  ${typography.headline[5]};
  color: ${colors.secondary[300]};
  margin-bottom: 4rem;
`;

function LandingPage({ isMapReady }) {
  const { user } = useAuth();

  return (
    <>
      <SectionOne>
        <SectionBackground src={ListHome} autoPlay loop muted />
        <TitleSection>
          Meet your new Home
          <SubTitleSection>
            The easiest way to find where you belong
          </SubTitleSection>
          <SearchForm isMapReady={isMapReady} />
        </TitleSection>
      </SectionOne>
      <LayoutCase />
      {!user && <SignUpHero />}
      <TeamSection />
    </>
  );
}

export default LandingPage;
