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

export default function PropertyCustomCard({ownerId}) {
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

  const { id } = useParams();
  const { savedProps } = useProperties();
  const [isFav, setIsFav] = useState(false);
  const [savedProp, setSavedProps] = useState(null);
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    if (!user) return;
    const savedProp = savedProps.find(
      (e) => parseInt(e.property_details.id) === parseInt(id)
    );
    setSavedProps(savedProp);
    console.log("Saved Prop", savedProp);

    if (!savedProp) return;
    if (savedProp.favorite === true) setIsFav(true);
    if (savedProp.contacted === true) {
      setShowContactInfo(true);
    }
  }, [savedProps, id, user]);

  useEffect(() => {
    if (!ownerId) return;
    showUser(ownerId).then((data) => setContactInfo(data));
  }, [ownerId]);

  const addFavorite = (id) => {
    updateSavedProperties({ favorite: true }, id)
      .then((data) => {
        console.log(data);
        console.log("adding to fav...");
        setIsFav(true);
      })
      .catch(console.log);
  };

  const createFavorite = (id) => {
    createSavedProperties({ favorite: true, property_id: id }).then((data) => {
      console.log(data);
      console.log("creating favorite....");
      setIsFav(true);
    });
  };

  const createContacted = (id) => {
    createSavedProperties({ contacted: true, property_id: id }).then((data) => {
      console.log(data);
      console.log("creating contacted....");
      setShowContactInfo(true);
    });
  };

  const updateContacted = (id) => {
    updateSavedProperties({ contacted: true }, id).then((data) => {
      console.log(data);
      console.log("adding to contacted....");
      setShowContactInfo(true);
    });
  };

  const removeFavorite = (id) => {
    updateSavedProperties({ favorite: false }, id)
      .then((data) => {
        console.log(data);
        console.log("deleting from fav...");
        setIsFav(false);
      })
      .catch(console.log);
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

        {user && userRole === "Homeseeker" && (
          <Wrapper>
            {!showContactInfo ? (
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
                {isFav ? (
                  <>
                    <AiFillHeart
                      size="1.5rem"
                      color={`${colors.primary[300]}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFavorite(savedProp.id || id)}
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
            ) : (
              <>
                <h6>Contact information</h6>
                <DataText>
                  <h4>Name</h4>
                  <p>{contactInfo.name}</p>
                  {/* <p>hugo</p> */}
                </DataText>
                <DataText>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                  {/* <p>dude@greathouse.com</p> */}
                </DataText>
                <DataText>
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                  {/* <p>999444333</p> */}
                </DataText>
              </>
            )}
          </Wrapper>
        )}
        {user && userRole === "Landlord" && (
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
