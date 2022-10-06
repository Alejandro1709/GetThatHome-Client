import styled from "@emotion/styled";
import Input from "./Input";
import { BiSearch } from "react-icons/bi";
import { colors, typography } from "../styles";
import { RiMoneyDollarCircleLine, RiUploadLine } from "react-icons/ri";
import { fonts } from "../styles/typography";
import Button from "./Button";
import { useState } from "react";

const MainContainer = styled.div`
  min-height: inherit;
  padding: 2rem;
  margin: 0 7.5rem;
`;

const FormContainer = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & p {
    font-family: ${fonts.secondary};
    ${typography.caption}
    color: ${colors.secondary[600]};
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  & h4,
  h5 {
    ${typography.overline};
    margin: 0;
  }
  & h5 {
    text-transform: uppercase;
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

const UploadedBox = styled.div`
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

const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  & label {
    font-family: ${fonts.secondary};
    ${typography.body[2]}
    color: ${colors.secondary[600]};
  }

  & input[type="radio"] {
    appearance: none;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
  }

  & input[type="radio"]::before {
    position: absolute;
    content: "";
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid ${colors.primary[300]};
    cursor: pointer;
  }
  & input[type="radio"]:checked::before {
    position: absolute;
    content: "\u2714";
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    color: ${colors.secondary[200]};
    background-color: ${colors.primary[300]};
    border: 1px solid ${colors.primary[300]};
  }

  & input[type="checkbox"] {
    appearance: none;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
  }

  & input[type="checkbox"]::before {
    position: absolute;
    content: "";
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid ${colors.primary[300]};
    cursor: pointer;
  }
  & input[type="checkbox"]:checked::before {
    position: absolute;
    content: "\u2714";
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    color: ${colors.secondary[200]};
    background-color: ${colors.primary[300]};
    border: 1px solid ${colors.primary[300]};
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

  const [type, setType] = useState("sale");

  const changeType = (e) => {
    setType(e.target.id);
    const selected = e.target;
    const active = document.querySelector(".activeType");
    if (selected !== active) {
      active.classList.remove("activeType");
      selected.classList.add("activeType");
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <h2>Create a property listing</h2>
        <TypePicker>
          <Type left={true} id="rent" onClick={changeType}>
            Rent
          </Type>
          <Type className="activeType" id="sale" onClick={changeType}>
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
        {type === "rent" && (
          <>
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
          </>
        )}
        {type === "sale" && (
          <>
            <div>
              <Input
                label="price"
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
          </>
        )}
        <InputWrapper>
          <h4>property type</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <CheckboxWrapper>
              <input
                type="radio"
                value="apartment"
                id="apartment"
                name="prop_type"
              />
              <label htmlFor="apartment">Apartment</label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <input type="radio" value="house" id="house" name="prop_type" />
              <label htmlFor="house">House</label>
            </CheckboxWrapper>
          </div>
        </InputWrapper>
        <SelectWrapper>
          <InputWrapper>
            <h5>bedrooms</h5>
            <StyledSelect>
              <option selected disabled hidden>
                Select...
              </option>
              <option value="1">1</option>
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <h5>bathrooms</h5>
            <StyledSelect>
              <option selected disabled hidden>
                Select...
              </option>
              <option value="1">1</option>
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <h5>area</h5>
            <Input placeholder="##" width="50%" />
          </InputWrapper>
        </SelectWrapper>
        {type === "rent" && (
          <>
            <CheckboxWrapper>
              <input type="checkbox" value="pets_allowed" id="pets_allowed" />
              <label htmlFor="pets_allowed">Pets Allowed</label>
            </CheckboxWrapper>
            <p>
              Allowing pets increases the likehood of renters liking the
              property by 9001%. It also makes you a better person.
            </p>
          </>
        )}
        <InputWrapper>
          <h4>about this property</h4>
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
          {images.length === 0 ? (
            <UploadedBox>No photos yet</UploadedBox>
          ) : (
            images.map((imagen) => (
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
            ))
          )}
        </UploadedBoxContainer>
        <Button
          type="submit"
          style={{ width: "fit-content", padding: "1rem 1.5rem" }}
        >
          Publish property listing
        </Button>
      </FormContainer>
    </MainContainer>
  );
}
