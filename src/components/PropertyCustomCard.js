import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";
import { boxShadow } from "../styles/utils";

const Wrapper = styled.div`
  max-width: 14rem;
  background-color: ${colors.secondary[200]};
  ${boxShadow[1]};
  padding: 2rem;
  & p {
    ${typography.body[1]};
    text-align: center;
    font-family: ${fonts.secondary};
    font-weight: 400;
  }
`;

export default function PropertyCustomCard() {
  return (
    <Wrapper>
      <p>Log in or Join to contact the advertiser</p>
    </Wrapper>
  );
}
