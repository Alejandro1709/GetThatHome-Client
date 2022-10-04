import styled from "@emotion/styled";
import { colors } from "../styles";
import { typography } from "../styles/typography";
import PropertyCardDetail from "./PropertyCardDetail";

const Container = styled.div`
  height: 37.75rem;
  display: flex;
  justify-content: center;
  margin: 4rem auto;
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
  return (
    <Container>
      <ContainerCase>
        <SubTitleSection>Find an Apartment you Love</SubTitleSection>
        <TitleSection>Homes for rent at the best prices</TitleSection>
        <ContainerBestPrices>
          <PropertyCardDetail />
          <PropertyCardDetail />
          <PropertyCardDetail />
        </ContainerBestPrices>
      </ContainerCase>
    </Container>
  );
}

export default LayoutCase;
