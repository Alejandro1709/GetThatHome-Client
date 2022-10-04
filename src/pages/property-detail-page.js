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

const myImgs = [imagen1, imagen2, imagen3];
const testCoords = {
  latitude: -12.025,
  longitude: -77.065,
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const MainContainer = styled.div`
  width: 830px;
  margin: 2rem 0;
  padding: 0 2rem;
  /* height: 100vh; */
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
const AsideSection = styled.aside``;
const CardContainer = styled.div`
  padding: 2rem;
`;
const Map = styled.div``;

export default function PropertyDetailPage() {
  return (
    <Container>
      <MainContainer>
        <SliderContainer>
          <Slider images={myImgs} />
        </SliderContainer>
        <AboutSection>
          <DescHeader>
            <DescHeaderLeft>
              <h2>Francisco de Paula Ugarriza 27</h2>
              <h4>Miraflores, Lima</h4>
            </DescHeaderLeft>
            <DescHeaderRight>
              <DescMoney>
                <MoneyIcon />
                <h4>3,000</h4>
              </DescMoney>
              <h5>+100</h5>
            </DescHeaderRight>
          </DescHeader>
          <DescOptions>
            <DescSingleOpt>
              <BiBed />
              <h4>4 bedrooms</h4>
            </DescSingleOpt>
            <DescSingleOpt>
              <BiBath />
              <h4>4 bedrooms</h4>
            </DescSingleOpt>
            <DescSingleOpt>
              <BiArea />
              <h4>4 bedrooms</h4>
            </DescSingleOpt>
            <DescSingleOpt>
              <MdPets />
              <h4>4 bedrooms</h4>
            </DescSingleOpt>
          </DescOptions>
          <AboutDesc>
            <h3>About this property</h3>
            <p>
              3 Bedroom/2 Bathroom apartment available for ASAP move-in!
              Apartment features hardwood floors throughout, virtual doorman,
              Central AC/heat, dishwasher and a microwave. The kitchen has
              custom cabinetry and the living room is big enough to fit a dinner
              table, a couch and a tv set up.
            </p>
          </AboutDesc>
          <AboutDesc>
            <h3>Location</h3>
            <p>Francisco de Paula Ugarriza 27, Miraflores, Lima</p>
          </AboutDesc>
        </AboutSection>
        <MapBox coordValues={testCoords} />
      </MainContainer>
      <AsideSection>
        <CardContainer>
          <PropertyCustomCard />
        </CardContainer>
      </AsideSection>
    </Container>
  );
}
