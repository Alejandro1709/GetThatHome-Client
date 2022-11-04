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
import { NavLink, useParams } from "react-router-dom";
import { useProperties } from "../context/properties-context";
import {
  createSavedProperties,
  updateSavedProperties,
} from "../services/saved-properties-service";
import { showUser } from "../services/users-service";

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
  color: ${colors.secondary[700]};
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
  color: ${colors.secondary[700]};
  ${typography.body[2]};
  & h4 {
    color: ${colors.primary[400]};
    ${typography.body[2]};
    font-weight: 700;
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

export default function PropertyCustomCard({ ownerId }) {
  // User
  const { user } = useAuth();
  const { savedProps, changeReload } = useProperties();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFav, setIsFav] = useState(null);
  const [savedProp, setSavedProp] = useState(null);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState({});


  useEffect(() => {
    if (!user) return;
    console.log(savedProps);

    const savedProp = savedProps.find(
      (e) => parseInt(e.property_details.id) === parseInt(id)
    );
    setSavedProp(savedProp);
    if (!savedProp) return;
    if (savedProp.favorite === true) setIsFav(true);
    if (savedProp.favorite === false) setIsFav(false);
    if (savedProp.contacted === true) {
      setShowContactInfo(true);
    }
  }, [id, user, savedProps]);

  useEffect(() => {
    if (!ownerId) return;
    showUser(ownerId).then((data) => setContactInfo(data));
  }, [ownerId]);

  function handleCloseModal(e) {
    if (e.target.dataset.type === "modal") {
      setIsModalOpen(false);
    }
  }

  const addFavorite = (id) => {
    updateSavedProperties({ favorite: true }, id)
      .then((data) => {
        setIsFav(true);
        changeReload();
      })
      .catch(console.log);
  };

  const createFavorite = (id) => {
    createSavedProperties({ favorite: true, property_id: id }).then((data) => {
      setIsFav(true);
      changeReload();
    });
  };

  const removeFavorite = (id) => {
    updateSavedProperties({ favorite: false }, id)
      .then((data) => {
        setIsFav(false);
        changeReload();
      })
      .catch(console.log);
  };

  const createContacted = (id) => {
    createSavedProperties({ contacted: true, property_id: id }).then((data) => {
      setShowContactInfo(true);
      changeReload();
    });
  };

  const updateContacted = (id) => {
    updateSavedProperties({ contacted: true }, id).then((data) => {
      setShowContactInfo(true);
      changeReload();
    });
  };

  const FavDisplay = () => {
    return (
      <>
        {isFav ? (
          <>
            <AiFillHeart
              size="1.5rem"
              color={`${colors.primary[300]}`}
              style={{ cursor: "pointer" }}
              onClick={() => removeFavorite(savedProp?.id || id)}
            />
            <p>Remove from your favorite</p>
          </>
        ) : (
          <>
            <FavIcon
              size="1.5rem"
              onClick={
                savedProp
                  ? () => addFavorite(savedProp.id)
                  : () => createFavorite(id)
              }
            />
            <p>Add to favorites</p>
          </>
        )}
      </>
    );
  };

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
                onClick={() => setIsModalOpen(id)}
              >
                LOGIN
              </Button>
            </LoginAdCard>
          </Wrapper>
        )}

        {user?.role_name === "Homeseeker" && (
          <Wrapper>
            {showContactInfo ? (
              <>
                <h6>Contact information</h6>
                <DataText>
                  <h4>Name</h4>
                  <p>{contactInfo.name}</p>
                </DataText>
                <DataText>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </DataText>
                <DataText>
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                </DataText>
                <FavDisplay />
              </>
            ) : (
              <>
                <Button
                  onClick={
                    savedProp
                      ? () => updateContacted(savedProp.id)
                      : () => createContacted(id)
                  }
                >
                  Contact Advertiser
                </Button>
                <FavDisplay />
              </>
            )}
          </Wrapper>
        )}
        {user?.role_name === "Landlord" && (
          <NavLink to={`/editproperty/${id}`}>
            <Button leftIcon={<FaRegEdit size="1.5rem" />}>
              Edit Property
            </Button>
          </NavLink>
        )}
      </>
    </>
  );
}
