import styled from "@emotion/styled";
import Input from "./Input";
import { BiSearch } from "react-icons/bi";
import { colors, typography } from "../styles";
import { RiMoneyDollarCircleLine, RiUploadLine } from "react-icons/ri";
import { fonts } from "../styles/typography";
import Button from "./Button";
import { useState } from "react";

const Container = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  & h5 {
    ${typography.overline};
    margin: 0;
  }
  p {
    ${typography.caption};
    margin: 0;
  }
`;

const StyledSelect = styled.select`
  width: 120px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${colors.primary[300]};
  font-family: ${fonts.secondary};
  ${typography.body[1]};
  color: ${colors.secondary[500]};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${colors.primary[300]};
  font-family: ${fonts.secondary};
  min-height: 4.75rem;
  ${typography.body[2]};
  &::placeholder {
    color: ${colors.secondary[500]};
  }
`;

const PhotoSectionContainer = styled.div`
  & h3 {
    ${typography.headline[6]}
    font-weight: 500;
  }
  & p {
    font-family: ${fonts.secondary};
    ${typography.caption}
    color: ${colors.secondary[500]};
  }
`;

const PhotoUploader = styled.div`
  & h4 {
    ${typography.overline}
  }
`;

const StyledUploader = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 8.37rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  background-color: ${colors.primary[300]};
  font-family: ${fonts.secondary};
  ${typography.body[2]}
  color: ${colors.secondary[200]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const UploadedBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  background-color: ${colors.secondary[300]};
  padding: 0.5rem;
`;

export const UploadedBox = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.secondary[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography.caption}
`;

const TypePicker = styled.div`
  display: flex;
`;

const Type = styled.div`
  width: fit-content;
  padding: 0.5rem;
  border: 1px solid ${colors.secondary[600]};
  border-radius: ${({ left }) =>
    left ? `0.5rem 0 0 0.5rem` : `0 0.5rem 0.5rem 0`};
  color: ${colors.secondary[700]};
  background-color: ${colors.secondary[200]};
  font-family: ${fonts.secondary};
  ${typography.body[2]}
  cursor: pointer;
  &.activeType {
    color: ${colors.secondary[200]};
    background-color: ${colors.primary[300]};
  }
`;

const ImgBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgDeleteBtn = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.25rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background-color: ${colors.primary[300]};
  color: ${colors.secondary[200]};
  position: absolute;
  top: 15px;
  right: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[400]};
  }
`;

export default function NewPropertyForm() {
  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;
    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;
    //el array con las imagenes nuevas
    const arrayImages = [];
    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);
      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });
      indexInicial++;
    });
    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("borrar img " + indice);
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }

  return (
    <Container>
      <h2>Create a property listing</h2>
      <TypePicker>
        <Type left={true} value="rent">
          Rent
        </Type>
        <Type className="activeType" value="sale">
          Sale
        </Type>
      </TypePicker>
      <div>
        <Input
          label="adress"
          placeholder="start typing to autocomplete"
          width="100%"
          leftIcon={
            <BiSearch size="1.25rem" color={`${colors.secondary[500]}`} />
          }
        />
      </div>
      <div>
        <Input
          label="montly rent"
          leftIcon={
            <RiMoneyDollarCircleLine
              size="1.25rem"
              color={`${colors.secondary[500]}`}
            />
          }
          placeholder="200"
          width="50%"
        />
      </div>
      <div>
        <Input
          label="maintanance"
          leftIcon={
            <RiMoneyDollarCircleLine
              size="1.25rem"
              color={`${colors.secondary[500]}`}
            />
          }
          placeholder="100"
          width="50%"
        />
      </div>
      <div>
        <label>
          property type
          <input type="radio" value="apartment" name="prop_type" />
          <input type="radio" value="house" name="prop_type" />
        </label>
      </div>
      <SelectWrapper>
        <InputWrapper>
          <p>bedrooms</p>
          <StyledSelect>
            <option selected disabled hidden>
              Select...
            </option>
            <option value="1">1</option>
          </StyledSelect>
        </InputWrapper>
        <InputWrapper>
          <p>bathrooms</p>
          <StyledSelect>
            <option selected disabled hidden>
              Select...
            </option>
            <option value="1">1</option>
          </StyledSelect>
        </InputWrapper>
        <InputWrapper>
          <p>area</p>
          <Input placeholder="##" width="50%" />
        </InputWrapper>
      </SelectWrapper>
      <InputWrapper>
        <h5>about this property</h5>
        <StyledTextArea placeholder="My apartment is great because..." />
        <p>
          Renters will read this first, so highlight any features or important
          information the apartment has.
        </p>
      </InputWrapper>
      <PhotoSectionContainer>
        <h3>Photos</h3>
        <PhotoUploader>
          <h4>Upload as many photos as you wish</h4>
          <StyledUploader>
            <RiUploadLine size="1.25rem" />
            Choose a file
            <InputFile type="file" onChange={changeInput} />
          </StyledUploader>
          <input type="file" style={{ display: "none" }} />
        </PhotoUploader>
        <p>Only images, max 5MB</p>
      </PhotoSectionContainer>
      <UploadedBoxContainer>
        {images.map((imagen) => (
          <UploadedBox key={imagen.index}>
            <ImgBox>
              <ImgDeleteBtn onClick={deleteImg.bind(this, imagen.index)}>
                X
              </ImgDeleteBtn>
              <img
                alt="algo"
                src={imagen.url}
                data-toggle="modal"
                data-target="#ModalPreViewImg"
                style={{ height: "80%" }}
              />
            </ImgBox>
          </UploadedBox>
        ))}
      </UploadedBoxContainer>
      <Button
        type="submit"
        style={{ width: "fit-content", padding: "1rem 1.5rem" }}
      >
        Publish property listing
      </Button>
    </Container>
  );
}
