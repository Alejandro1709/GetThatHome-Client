import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import Slider from "../components/Slider";
import imagen1 from "../assets/images/apartment1.jpg";
import imagen2 from "../assets/images/apartment2.jpg";
import imagen3 from "../assets/images/apartment3.jpg";
import MapBox from "../components/MapBox";
import PropertyCustomCard from "../components/PropertyCustomCard";
import { useLocation } from "react-router-dom";
import { showProperty } from "../services/properties-service";
import { useState } from "react";

const myImgs = [imagen1, imagen2, imagen3];
const testCoords = {
  latitude: -12.025,
  longitude: -77.065,
};

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
  const sampleLocation = useLocation().pathname;

  const id = sampleLocation.split("/")[2];

  const [propertyByID, setPropertyByID] = useState("");

  showProperty(id).then((data) => setPropertyByID(data));

  const {
    bedrooms,
    bathrooms,
    area,
    description,
    photo_urls,
    operation_type,
    monthly_rent,
    maintenance,
    pet_allowed,
    latitude,
    longitude,
    address,
  } = propertyByID;

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
                <h2>{address}</h2>
                <h4>{(longitude, latitude)}</h4>
              </DescHeaderLeft>
              <DescHeaderRight>
                <DescMoney>
                  <MoneyIcon />
                  <h4>{monthly_rent}</h4>
                </DescMoney>
                <h5>{maintenance}</h5>
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
              <DescSingleOpt>{pet_allowed ? <MdPets /> : ""}</DescSingleOpt>
            </DescOptions>
            <AboutDesc>
              <h3>{description}</h3>
              <p>
                3 Bedroom/2 Bathroom apartment available for ASAP move-in!
                Apartment features hardwood floors throughout, virtual doorman,
                Central AC/heat, dishwasher and a microwave. The kitchen has
                custom cabinetry and the living room is big enough to fit a
                dinner table, a couch and a tv set up.
              </p>
            </AboutDesc>
            <AboutDesc>
              <h3>Location</h3>
              <p>{address}</p>
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
