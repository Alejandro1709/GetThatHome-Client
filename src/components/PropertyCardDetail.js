import styled from '@emotion/styled';
import { boxShadow } from '../styles/utils';
import casa1 from '../assets/images/casa1.jpg';
import { colors } from '../styles/colors';
import { RiCoinsLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { fonts, typography } from '../styles/typography';
import { BiBed, BiBuildingHouse, BiBath, BiArea } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';

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
  height: 10rem;
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
`;

export const Options = styled.div`
  background-color: ${colors.primary[400]};
  height: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const DataIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

function PropertyCardDetail() {
  return (
    <ShowCaseBox>
      <CardImg>
        <Deal>
          <RiCoinsLine />
          <Rental>For Rental</Rental>
        </Deal>
        <ShowCaseImg src={casa1} alt='casa1' />
      </CardImg>
      <ShowCaseData>
        <CostProperty>
          <Rent>
            <RiMoneyDollarCircleLine />
            <Cost>3000</Cost>
          </Rent>
          <Type>
            <BiBuildingHouse />
            <TypeName>Apartment</TypeName>
          </Type>
        </CostProperty>
        <ContactDetails>
          {' '}
          86872 Jacob Gateway, Durganport, WV 48044{' '}
        </ContactDetails>
        <Additionals>
          <DataIcons>
            <BiBed /> 4{' '}
          </DataIcons>
          <DataIcons>
            <BiBath /> 2{' '}
          </DataIcons>
          <DataIcons>
            <BiArea /> 180 m2{' '}
          </DataIcons>
          <DataIcons>
            <FaPaw />
          </DataIcons>
        </Additionals>
        <Options />
      </ShowCaseData>
    </ShowCaseBox>
  );
}

export default PropertyCardDetail;
