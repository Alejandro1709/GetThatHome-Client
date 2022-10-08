import { useEffect, useState } from "react";
import { boxShadow } from "../styles/utils";
import casa1 from "../assets/images/casa1.jpg";
import { colors } from "../styles/colors";
import { RiCoinsLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { fonts, typography } from "../styles/typography";
import { BiBed, BiBuildingHouse, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import PropertyDetailPage from "../pages/property-detail-page";
import { FiEdit } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import getGeocode from '../services/mapbox-service';


export const ShowCaseBox = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  ${boxShadow[1]};
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  user-select: none;
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ShowCaseImg = styled.img`
  width: 100%;
  height: 12.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const ShowCaseData = styled.div`
  width: 100%;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const Deal = styled.div`
  position: absolute;
  width: 110px;
  height: 28px;
  border-top-right-radius: 0.5rem;
  background: ${colors.primary[300]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: ${colors.secondary[200]};
`;

export const Rental = styled.span`
  display: flex;
  font-family: ${fonts.primary};
  ${typography.body[2]};
`;

export const Rent = styled.div`
  color: ${colors.secondary[700]};
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography.headline[5]}
`;

export const Cost = styled.span`
  font-family: ${fonts.primary};
  margin-left: 0.625rem;
`;

export const Type = styled.div`
  color: ${colors.secondary[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography.body[1]}
`;

export const TypeName = styled.span`
  margin-left: 0.316rem;
`;

export const CostProperty = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.625rem;
`;

export const ContactDetails = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  word-break: break-all;
  ${typography.subtitle[1]};
  color: ${colors.secondary[700]};
`;

export const Additionals = styled.div`
  margin: 1rem;
  display: flex;
  gap: 1rem;
  & svg {
    color: ${colors.secondary[600]};
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${colors.primary[400]};
  /* height: 0.5rem; */
  color: white;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const NoOptions = styled.div`
  height: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: ${colors.primary[400]};
`;

export const DataIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${fonts.secondary};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const StyledOption = styled.button`
  border: none;
  color: white;
  background: none;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

function PropertyCardDetail({ property, belongsToMe }) {
  const {
    address,
    area,
    bathrooms,
    bedrooms,
    property_type,
    operation_type,
    photo_urls,
  } = property;
  const [geocoded, setGeocoded] = useState(null);

  useEffect(() => {
    getGeocode(address).then(setGeocoded).catch(console.log);
  }, [address]);

  return (
    <StyledNavLink to={`/properties/${property.id}`}>
      <ShowCaseBox>
        <CardImg>
          <Deal>
            <RiCoinsLine />
            {operation_type.type === "for rent" && <Rental>For Rental</Rental>}
            {operation_type.type === "for sale" && <Rental>For Sale</Rental>}
          </Deal>
          <ShowCaseImg src={photo_urls[0] || casa1} alt='home-thumbnail' />
        </CardImg>
        <ShowCaseData>
          <CostProperty>
            <Rent>
              <RiMoneyDollarCircleLine />
              <Cost>{operation_type.monthly_rent || operation_type.price}</Cost>
            </Rent>
            <Type>
              <BiBuildingHouse />
              <TypeName>{property_type.name}</TypeName>
            </Type>
          </CostProperty>
          <ContactDetails>
            {geocoded ? geocoded : "Not an actual address..."}
          </ContactDetails>
          <Additionals>
            <DataIcons>
              <BiBed size="1.5rem" /> {bedrooms}
            </DataIcons>
            <DataIcons>
              <BiBath size="1.5rem" /> {bathrooms}
            </DataIcons>
            <DataIcons>
              <BiArea size="1.5rem" /> {area} m2
            </DataIcons>
            <DataIcons>{operation_type.pets_allowed && <FaPaw />}</DataIcons>
          </Additionals>
          {belongsToMe ? (
            <Options>
              <StyledOption>
                <FiEdit />
                Edit
              </StyledOption>
              <StyledOption>
                <AiOutlineCloseCircle />
                Close
              </StyledOption>
            </Options>
          ) : (
            <NoOptions />
          )}
        </ShowCaseData>
      </ShowCaseBox>
    </StyledNavLink>
  );
}

export default PropertyCardDetail;
