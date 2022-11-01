import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";
import IconHome from "../assets/icons/LogoHome.png";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";
import { boxShadow } from "../styles/utils";
import { DiReact, DiRuby } from "react-icons/di";

const FooterContainer = styled.div`
  position: relative;
  ${boxShadow[1]};
  z-index: 1;
  background: ${colors.secondary[300]};
  border-top: 1px solid ${colors.primary[400]};
`;

const ContainerFooter = styled.div`
  font-family: ${fonts.secondary};
  ${typography.body[2]};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 2rem;
  gap: 0.625rem;
  justify-content: space-between;
  align-items: center;
  color: ${colors.secondary[600]};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTeam = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TeamNames = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0.25rem;
  text-align: justify;
`;

const SectionCode = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  margin-left: 0.5rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContainerFooter>
        <Section>
          <span>
            <img src={IconHome} alt="Logo Home" />
          </span>
          <span>© 2022 - Get That Job</span>
          <span>Codeable - Cohort 7 Final Project</span>
        </Section>
        <SectionTeam>
          <span>Build with ❤ by:</span>
          <TeamNames>
            <span>
              <AiFillGithub />
              <Span>Alejandro La Rosa</Span>
            </span>
            <span>
              <AiFillGithub />
              <Span>Bryan Mendoza</Span>
            </span>
          </TeamNames>
          <span>
            <AiFillGithub />
            <Span>David Montoya</Span>
          </span>
          <TeamNames>
            <span>
              <AiFillGithub />
              <Span>Stephanny Vargas</Span>
            </span>
            <span>
              <AiFillGithub />
              <Span>Erik Cardenas</Span>
            </span>
          </TeamNames>
        </SectionTeam>
        <SectionCode>
          Source code:
          <span>
            <DiRuby />
            <Span>Ruby on Rails REST API</Span>
          </span>
          <span>
            <DiReact />
            <Span>React Responsive SPA</Span>
          </span>
        </SectionCode>
      </ContainerFooter>
    </FooterContainer>
  );
}

export default Footer;
