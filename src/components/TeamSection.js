import styled from "@emotion/styled";
import { colors } from "../styles";
import { fonts, typography } from "../styles/typography";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

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
  gap: 5.8rem;
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
          <img
            src="https://avatars.githubusercontent.com/u/64037397?v=4"
            alt="Human"
            style={{
              width: "11.25rem",
              height: "11.25rem",
              borderRadius: "50%",
            }}
          />
          <InfoPerson>
            Alejandro La Rosa
            <LinksPerson>
              <GiPencilBrush
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <a
                href="https://github.com/Alejandro1709"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-la-rosa-4497a995"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img
            src="https://avatars.githubusercontent.com/u/97063552?v=4"
            alt="Human"
            style={{
              width: "11.25rem",
              height: "11.25rem",
              borderRadius: "50%",
            }}
          />
          <InfoPerson>
            Bryan Mendoza G.
            <LinksPerson>
              <GiPencilBrush
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <a
                href="https://github.com/mgbryan90"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bryanmendozaguerreros"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img
            src="https://avatars.githubusercontent.com/u/101736772?v=4"
            alt="Human"
            style={{
              width: "11.25rem",
              height: "11.25rem",
              borderRadius: "50%",
            }}
          />
          <InfoPerson>
            David Montoya
            <LinksPerson>
              <GiPencilBrush
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <a
                href="https://github.com/DavidMontoya24"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/davidmontoya24"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img
            src="https://avatars.githubusercontent.com/u/1269801?v=4"
            alt="Human"
            style={{
              width: "11.25rem",
              height: "11.25rem",
              borderRadius: "50%",
            }}
          />
          <InfoPerson>
            Erik Cardenas
            <LinksPerson>
              <BsTools
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <a
                href="http://github.com/efdree"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/erikcardenasv"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </LinksPerson>
          </InfoPerson>
        </People>
        <People>
          <img
            src="https://avatars.githubusercontent.com/u/91625172?v=4"
            alt="Human"
            style={{
              width: "11.25rem",
              height: "11.25rem",
              borderRadius: "50%",
            }}
          />
          <InfoPerson>
            Stephanny Vargas
            <LinksPerson>
              <BsTools
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <a
                href="https://github.com/stephv729"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/stephannyvargas"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
            </LinksPerson>
          </InfoPerson>
        </People>
      </TeamContainer>
    </Container>
  );
}

export default TeamSection;
