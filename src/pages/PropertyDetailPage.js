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
import getGeocode from "../services/mapbox-service";

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
  const [geocoded, setGeocoded] = useState(null);
  const [propertyByID, setPropertyByID] = useState({
    bathrooms: "",
    bedrooms: "",
    area: "",
    description: "",
    photo_urls: [],
    operation_type: {},
    address: {},
  });

  const {
    bathrooms,
    bedrooms,
    area,
    description,
    photo_urls,
    operation_type,
    address,
  } = propertyByID;

  const { type, price, monthly_rent, maintenance, pets_allowed } =
    operation_type;
  const { latitude, longitude } = address;

  const { id } = useParams();

  useEffect(() => {
    showProperty(id)
      .then((data) => setPropertyByID(data))
      .catch(console.log);
  }, [id]);

  useEffect(() => {
    getGeocode(address).then(setGeocoded).catch(console.log);
  }, [address]);

  return (
    <TotalContainer>
      <Container>
        <MainContainer>
          <SliderContainer>
            <Slider images={photo_urls} />
          </SliderContainer>
          <AboutSection>
            <DescHeader>
              <DescHeaderLeft>
                <h2>{address.name}</h2>
                <h4> {geocoded ? geocoded : "Not an actual address..."}</h4>
              </DescHeaderLeft>
              <DescHeaderRight>
                <DescMoney>
                  <MoneyIcon />
                  <h4>{type === "for rent" ? monthly_rent : price}</h4>
                </DescMoney>
                <h5>{type === "for rent" ? "+"+maintenance : ""}</h5>
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
                <h4>{area} m2</h4>
              </DescSingleOpt>
              <DescSingleOpt>
                {pets_allowed ? (
                  <>
                    <MdPets /> Pets allowed
                  </>
                ) : (
                  ""
                )}
              </DescSingleOpt>
            </DescOptions>
            <AboutDesc>
            <h3>About this property</h3>
              <p>
                {bedrooms} Bedroom/ {bathrooms} Bathroom.
              </p>
              <br/>
              <p>{description}</p>
            </AboutDesc>
            <AboutDesc>
              <h3>Location</h3>
              <p>{address.name}</p>
            </AboutDesc>
          </AboutSection>
          <MapBox coordValues={{ latitude, longitude }} />
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
