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

const myImgs = [imagen1, imagen2, imagen3];

const Container = styled.div`
  width: 830px;
  padding: 0 2rem;
  border: 1px solid black;
  height: 100vh;
`;

const SliderContainer = styled.div`
  /* height: 24rem; */
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
const Map = styled.div``;

export default function PropertyDetailPage() {
  // function iniciarMap() {
  //   var coord = { lat: -34.5956145, lng: -58.4431949 };
  //   var map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 10,
  //     center: coord,
  //   });
  //   var marker = new google.maps.Marker({
  //     position: coord,
  //     map: map,
  //   });
  // }
  return (
    <Container>
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
            3 Bedroom/2 Bathroom apartment available for ASAP move-in! Apartment
            features hardwood floors throughout, virtual doorman, Central
            AC/heat, dishwasher and a microwave. The kitchen has custom
            cabinetry and the living room is big enough to fit a dinner table, a
            couch and a tv set up.
          </p>
        </AboutDesc>
        <AboutDesc>
          <h3>Location</h3>
          <p>Francisco de Paula Ugarriza 27, Miraflores, Lima</p>
        </AboutDesc>
      </AboutSection>
      <Map>
        <div id="map"></div>
        {/* <img src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap" /> */}
      </Map>
    </Container>
  );
}
