import { useProperties } from "../context/properties-context";
import { colors } from "../styles";
import { typography } from "../styles/typography";
import PropertyCardDetail from "./PropertyCardDetail";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 37.75rem;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
`;
const ContainerCase = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.span`
  display: flex;
  justify-content: center;
  ${typography.headline[4]};
  color: ${colors.primary[400]};
  margin-bottom: 2rem;
`;

const SubTitleSection = styled.span`
  display: flex;
  justify-content: center;
  ${typography.subtitle[2]};
  margin-bottom: 1rem;
`;

const ContainerBestPrices = styled.div`
  display: flex;
  gap: 3rem;
`;

function LayoutCase() {
  const { bestProps } = useProperties();
  console.log(bestProps);
  return (
    <Container>
      <ContainerCase>
        <SubTitleSection>Find an Apartment you Love</SubTitleSection>
        <TitleSection>Homes for rent at the best prices</TitleSection>
        <ContainerBestPrices>
          {bestProps.map((property) => (
            <PropertyCardDetail key={property.id} property={property} />
          ))}
          {/* <PropertyCardDetail /> */}
        </ContainerBestPrices>
      </ContainerCase>
    </Container>
  );
}

export default LayoutCase;
