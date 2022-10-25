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

const ImgAvatar = styled.img`
  -webkit-transition: 2s linear;
  transition: 2s linear;
  &:hover {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: ${colors.secondary[600]};
`;

const teamMembers = [
  {
    name: "Alejandro La Rosa",
    avatar_url: "https://avatars.githubusercontent.com/u/64037397?v=4",
    github: "https://github.com/Alejandro1709",
    linkedin: "https://www.linkedin.com/in/alejandro-la-rosa-4497a995",
    role: "Frontend",
  },
  {
    name: "Bryan Mendoza",
    avatar_url: "https://avatars.githubusercontent.com/u/97063552?v=4",
    github: "https://github.com/mgbryan90",
    linkedin: "https://www.linkedin.com/in/bryanmendozaguerreros",
    role: "Frontend",
  },
  {
    name: "David Montoya",
    avatar_url: "https://avatars.githubusercontent.com/u/101736772?v=4",
    github: "https://github.com/DavidMontoya24",
    linkedin: "https://www.linkedin.com/in/davidmontoya24",
    role: "Frontend",
  },
  {
    name: "Erik Cardenas",
    avatar_url: "https://avatars.githubusercontent.com/u/1269801?v=4",
    github: "http://github.com/efdree",
    linkedin: "https://www.linkedin.com/in/erikcardenasv",
    role: "Backend",
  },
  {
    name: "Stephanny Vargas",
    avatar_url: "https://avatars.githubusercontent.com/u/91625172?v=4",
    github: "http://github.com/stephv729",
    linkedin: "https://www.linkedin.com/in/stephannyvargas",
    role: "Backend",
  },
];
function TeamSection() {
  return (
    <Container>
      <TitleTeam>Meet the team</TitleTeam>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <People key={index}>
            <ImgAvatar
              src={member.avatar_url}
              alt="Human"
              style={{
                width: "11.25rem",
                height: "11.25rem",
                borderRadius: "50%",
              }}
            />
            <InfoPerson>
              {member.name}
              <LinksPerson>
                {member.role === "Frontend" && (
                  <GiPencilBrush
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )}
                {member.role === "Backend" && (
                  <BsTools
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )}
                <Link href={member.github} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </Link>
                <Link href={member.linkedin} target="_blank" rel="noreferrer">
                  <AiOutlineLinkedin />
                </Link>
              </LinksPerson>
            </InfoPerson>
          </People>
        ))}
      </TeamContainer>
    </Container>
  );
}

export default TeamSection;
