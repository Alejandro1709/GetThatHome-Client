import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";

const Container = styled.div`
  width: 830px;
  padding: 0 2rem;
  border: 1px solid black;
  height: 100vh;
`;

const Slider = styled.div``;

const AboutSection = styled.div``;

const DescriptionHeader = styled.div``;

const DescriptionOptions = styled.div``;
const Map = styled.div``;

export default function PropertyDetailPage() {
  function iniciarMap() {
    var coord = { lat: -34.5956145, lng: -58.4431949 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: coord,
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
  }
  return (
    <Container>
      <Slider></Slider>
      <AboutSection>
        <DescriptionHeader>
          <div>
            <h2>Francisco de Paula Ugarriza 27</h2>
            <h4>Miraflores, Lima</h4>
          </div>
          <div>
            <div>
              <RiMoneyDollarCircleLine />
              <h4>3,000</h4>
            </div>
            <h5>+100</h5>
          </div>
        </DescriptionHeader>
        <DescriptionOptions>
          <div>
            <BiBed />4 bedrooms
          </div>
          <div>
            <BiBath />4 bedrooms
          </div>
          <div>
            <BiArea />4 bedrooms
          </div>
          <div>
            <MdPets />4 bedrooms
          </div>
        </DescriptionOptions>
      </AboutSection>
      <Map>
        <div id="map"></div>
        {/* <img src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap" /> */}
      </Map>
    </Container>
  );
}
