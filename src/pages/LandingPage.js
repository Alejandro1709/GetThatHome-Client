import ListHome from "../assets/videos/listHouses.mp4";
import { fonts, typography } from "../styles/typography";
import { colors } from "../styles/colors";
import SearchForm from "../components/SearchForm";
import LayoutCase from "../components/LayoutCase";
import SignUpHero from "../components/SignUpHero";
import TeamSection from "../components/TeamSection";
import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";
import Modal from "../components/Modal";
import GetThatHomeLogo from "../assets/icons/gth-logo";
import { useEffect, useState } from "react";

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

const ContainerLoading = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  ${colors.gradient[1]};
  animation: 0.8s ease 2s close;
  & svg {
    width: 20rem;
    animation: 2s ease-in-out grow;
  }
  @keyframes grow {
    25% {
      transform: rotate(540deg);
    }
    45% {
      transform: rotate(0deg);
      transform: scale(0.9);
    }
    50% {
    }
    75% {
      transform: rotate(-15deg);
      transform: scale(1.1);
    }
    90% {
      transform: rotate(8deg);
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes close {
    100% {
      transform: translateY(-100vh);
      display: none;
    }
  }
  & h1 {
    font-size: 3rem;
    color: ${colors.secondary[200]};
  }
`;

const IntroModal = () => {
  return (
    <Modal>
      <ContainerLoading>
        {GetThatHomeLogo}
        <h1>Welcome to GetThatHome</h1>
      </ContainerLoading>
    </Modal>
  );
};

function LandingPage({ isMapReady }) {
  const [intro, setIntro] = useState(false);
  const { user, status } = useAuth();

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    setIntro(!user);
    setTimeout(() => {
      setIntro(false);
    }, 2600);
  }, [user, status]);

  return (
    <>
      {intro && <IntroModal />}
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
