import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";
import { boxShadow } from "../styles/utils";
import Button from "./Button";
import { RiUserReceivedLine } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const Wrapper = styled.div`
  min-width: 14rem;
  border-radius: 0.5rem;
  background-color: ${colors.secondary[200]};
  ${boxShadow[1]};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  & h6 {
    ${typography.headline[6]};
    margin: 0;
    font-weight: 500;
  }
  & p {
    ${typography.caption};
  }
  & button {
    ${typography.button};
    width: fit-content;
  }
`;

const FavIcon = styled(BiHeart)`
  cursor: pointer;
  &:hover {
    color: ${colors.primary[400]};
  }
`;

const DataText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${typography.body[2]};
  & h4 {
    color: ${colors.primary[400]};
    ${typography.body[2]};
  }
`;

const LoginAdCard = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const LoginAdText = styled.div`
  width: 8rem;
  text-align: center;
  ${typography.body[1]};
  text-align: center;
  font-family: ${fonts.secondary};
`;

export default function PropertyCustomCard() {
  // const [isLogged, setIsLogged] = useState(true);
  // const [userRole, setuserRole] = useState("landlord");
  const isLogged = true;
  const userRole = "homeseeker";
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <>
      <>
        {!isLogged && (
          <Wrapper>
            <LoginAdCard>
              <LoginAdText>
                Log in or Join to contact the advertiser
              </LoginAdText>
              <Button leftIcon={<RiUserReceivedLine size="1.5rem" />}>
                LOGIN
              </Button>
            </LoginAdCard>
          </Wrapper>
        )}
        {isLogged && userRole === "homeseeker" && (
          <Wrapper>
            {!showContactInfo ? (
              <>
                <Button onClick={() => setShowContactInfo(true)}>
                  Contact Advertiser
                </Button>
                <FavIcon size="1.5rem" />
                <p>Add to favorites</p>
              </>
            ) : (
              <>
                <h6>Contact information</h6>
                <DataText>
                  <h4>Email</h4>
                  <p>dude@greathouse.com</p>
                </DataText>
                <DataText>
                  <h4>Phone</h4>
                  <p>999444333</p>
                </DataText>
              </>
            )}
          </Wrapper>
        )}
        {isLogged && userRole === "landlord" && (
          <Button leftIcon={<FaRegEdit size="1.5rem" />}>edit property</Button>
        )}
      </>
    </>
  );
}
