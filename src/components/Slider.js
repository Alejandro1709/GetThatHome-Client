import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { colors } from "../styles/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Box = styled.div`
  padding: 1rem 0;
  width: 32rem;
  background-color: ${colors.secondary[400]};
  height: 24rem;
`;

export default function Slider({ images }) {
  const [actualImg, setActualImg] = useState(0);
  const cantidad = images?.length;

  if (!Array.isArray(images) || cantidad === 0) return;

  const next = () => {
    setActualImg(actualImg === cantidad - 1 ? 0 : actualImg + 1);
  };

  const prev = () => {
    setActualImg(actualImg === 0 ? cantidad - 1 : actualImg - 1);
  };

  return (
    <Container>
      <IoIosArrowBack
        size="2rem"
        onClick={prev}
        style={{ cursor: "pointer" }}
      />
      <Box id="box">
        {images.map(
          (img, index) =>
            actualImg === index && (
              <img
                key={index}
                src={img}
                style={{ width: "100%", height: "100%" }}
              />
            )
        )}
      </Box>
      <IoIosArrowForward
        size="2rem"
        onClick={next}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
}
