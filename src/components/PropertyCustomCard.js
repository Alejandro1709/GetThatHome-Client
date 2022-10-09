import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";
import { boxShadow } from "../styles/utils";
import Button from "./Button";
import { RiUserReceivedLine } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import { useAuth } from "../context/auth-context";
import { AiFillHeart } from "react-icons/ai";

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

export default function PropertyCustomCard({ isFav, handleAddtoFav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal(e) {
    if (e.target.dataset.type === "modal") {
      setIsModalOpen(false);
    }
  }
  const [showContactInfo, setShowContactInfo] = useState(false);

  const { user } = useAuth();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    setUserRole(user?.role_name);
  }, [user]);

  return (
    <>
      <>
        {!user && (
          <Wrapper>
            <LoginAdCard>
              {isModalOpen && (
                <Modal onModalClose={handleCloseModal}>
                  <LoginForm handleCloseModal={() => setIsModalOpen(false)} />
                </Modal>
              )}
              <LoginAdText>
                Log in or Join to contact the advertiser
              </LoginAdText>
              <Button
                leftIcon={<RiUserReceivedLine size="1.5rem" />}
                onClick={() => setIsModalOpen(true)}
              >
                LOGIN
              </Button>
            </LoginAdCard>
          </Wrapper>
        )}

        {user && userRole === "Homeseeker" && (
          <Wrapper>
            {!showContactInfo ? (
              <>
                <Button onClick={() => setShowContactInfo(true)}>
                  Contact Advertiser
                </Button>
                {isFav ? (
                  <>
                    <AiFillHeart
                      size="1.5rem"
                      color={`${colors.primary[300]}`}
                      style={{ cursor: "pointer" }}
                      // onClick={handleAddtoFav}
                    />
                    <p>Remove from your favorite</p>
                  </>
                ) : (
                  <>
                    <FavIcon
                      size="1.5rem"
                      // onClick={handleAddtoFav}
                    />
                    <p>Add to favorites</p>
                  </>
                )}
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
        {user && userRole === "Landlord" && (
          <Button leftIcon={<FaRegEdit size="1.5rem" />}>Edit Property</Button>
        )}
      </>
    </>
  );
}
