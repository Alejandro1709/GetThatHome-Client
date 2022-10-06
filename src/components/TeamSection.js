import styled from "@emotion/styled";
import { colors } from "../styles";
import { fonts, typography } from "../styles/typography";
import human from "../assets/images/human.png";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Container = styled.div`
  height: 30.3rem;
`;

const TitleTeam = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  font-family: ${fonts.primary};
  ${typography.headline[3]};
  color: ${colors.primary[400]};
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const People = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.625rem;
`;

const InfoPerson = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
`;

const LinksPerson = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1.025rem;
`;

function TeamSection() {
  return (
    <Container>
      <TitleTeam>Meet the team</TitleTeam>
      <TeamContainer>
        <People>
          <img src={human} alt="Human" />
          <InfoPerson>
            Ruby Ramirez
            <LinksPerson>
              <AiFillGithub />
              <AiOutlineLinkedin />
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img src={human} alt="Human" />
          <InfoPerson>
            Ruby Ramirez
            <LinksPerson>
              <AiFillGithub />
              <AiOutlineLinkedin />
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img src={human} alt="Human" />
          <InfoPerson>
            Ruby Ramirez
            <LinksPerson>
              <AiFillGithub />
              <AiOutlineLinkedin />
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img src={human} alt="Human" />
          <InfoPerson>
            Ruby Ramirez
            <LinksPerson>
              <AiFillGithub />
              <AiOutlineLinkedin />
            </LinksPerson>
          </InfoPerson>
        </People>
      </TeamContainer>
    </Container>
  );
}

export default TeamSection;
