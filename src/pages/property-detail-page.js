import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import Slider from "../components/Slider";
import MapBox from "../components/MapBox";
import PropertyCustomCard from "../components/PropertyCustomCard";
import { useParams } from "react-router-dom";
import { showProperty } from "../services/properties-service";
import { useEffect, useState } from "react";

const TotalContainer = styled.div`
  min-height: inherit;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const MainContainer = styled.div`
  width: 830px;
  margin: 2rem 0;
  padding: 0 2rem;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DescHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescHeaderLeft = styled.div`
  & h2 {
    ${typography.headline[4]}
  }
  & h4 {
    ${typography.subtitle[1]}
  }
`;

const DescHeaderRight = styled.div`
  text-align: end;
  & h5 {
    margin: 0;
    ${typography.headline[6]}
  }
`;

const DescOptions = styled.div`
  border-top: 2px solid ${colors.primary[400]};
  border-bottom: 2px solid ${colors.primary[400]};
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
`;

const DescSingleOpt = styled.div`
  display: flex;
  & svg {
    width: 2rem;
    height: 2rem;
  }
  & h4 {
    ${typography.headline[5]}
  }
`;

const DescMoney = styled.div`
  display: flex;
  gap: 0.5rem;
  & h4 {
    ${typography.headline[4]}
  }
`;

const MoneyIcon = styled(RiMoneyDollarCircleLine)`
  height: 3rem;
  width: 3rem;
`;

const AboutDesc = styled.div`
  & h3 {
    color: ${colors.primary[400]};
    font-weight: 500;
  }
`;

const CardContainer = styled.div`
  padding: 2rem;
`;

export default function PropertyDetailPage() {
  const [propertyByID, setPropertyByID] = useState("");
  const {
    bathrooms,
    bedrooms,
    area,
    description,
    photo_urls,
    operation_type,
    address,
  } = propertyByID;

  /* operation_type  */
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [monthly_rent, setMonthlyRent] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [pets_allowed, setPetsAllowed] = useState("");

  /* address  */
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");

  const myImgs = photo_urls;

  const testCoords = {
    latitude: latitude,
    longitude: longitude,
  };

  const { id } = useParams();

  useEffect(() => {
    showProperty(id)
      .then((data) => {
        setPropertyByID(data);
      })
      .catch(console.log);
  }, [id]);

  useEffect(() => {
    setType(operation_type?.type);
    setPrice(operation_type?.price);
    setMonthlyRent(operation_type?.monthly_rent);
    setMaintenance(operation_type?.maintenance);
    setPetsAllowed(operation_type?.pets_allowed);
  }, [operation_type]);

  useEffect(() => {
    setLatitude(address?.latitude);
    setLongitude(address?.longitude);
    setName(address?.name);
  }, [address]);

  return (
    <TotalContainer>
      <Container>
        <MainContainer>
          <SliderContainer>
            <Slider images={myImgs} />
          </SliderContainer>
          <AboutSection>
            <DescHeader>
              <DescHeaderLeft>
                <h2>{name}</h2>
                <h4>{description}</h4>
              </DescHeaderLeft>
              <DescHeaderRight>
                <DescMoney>
                  <MoneyIcon />
                  <h4>{type === "for rent" ? monthly_rent : price}</h4>
                </DescMoney>
                <h5>{type === "for rent" ? maintenance : ""}</h5>
              </DescHeaderRight>
            </DescHeader>
            <DescOptions>
              <DescSingleOpt>
                <BiBed />
                <h4>{bedrooms} bedrooms</h4>
              </DescSingleOpt>
              <DescSingleOpt>
                <BiBath />
                <h4>{bathrooms} bathrooms</h4>
              </DescSingleOpt>
              <DescSingleOpt>
                <BiArea />
                <h4>{area} area</h4>
              </DescSingleOpt>
              <DescSingleOpt>{pets_allowed ? <MdPets /> : ""}</DescSingleOpt>
            </DescOptions>
            <AboutDesc>
              <h3>{description}</h3>
              <p>
                {bedrooms} Bedroom/ {bathrooms} Bathroom.
              </p>
            </AboutDesc>
            <AboutDesc>
              <h3>Location</h3>
              <p>{name}</p>
            </AboutDesc>
          </AboutSection>
          <MapBox coordValues={testCoords} />
        </MainContainer>
        <aside>
          <CardContainer>
            <PropertyCustomCard />
          </CardContainer>
        </aside>
      </Container>
    </TotalContainer>
  );
}
