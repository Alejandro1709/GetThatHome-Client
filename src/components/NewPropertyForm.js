import styled from "@emotion/styled";
import Input from "./Input";
import { BiSearch } from "react-icons/bi";
import { colors, typography } from "../styles";
import { RiMoneyDollarCircleLine, RiUploadLine } from "react-icons/ri";
import { fonts } from "../styles/typography";
import Button from "./Button";
import { useState } from "react";

const Container = styled.form`
  min-height: inherit;
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
  width: fit-content;
  padding: 0.5rem;
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

const UploadedBoxContainer = styled.div`
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

const PropertyTypeWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  & label {
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
`;

export default function NewPropertyForm() {
  const [type, setType] = useState("sale");

  const changeType = (event) => {
    console.log(event.target.value);
    // setType()
  };

  return (
    <Container>
      <h2>Create a property listing</h2>
      <TypePicker>
        <Type left={true} value="rent" onClick={changeType}>
          Rent
        </Type>
        <Type className="activeType" value="sale" onClick={changeType}>
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
        <h5>property type</h5>
        <div style={{ display: "flex", gap: "1rem" }}>
          <PropertyTypeWrapper>
            <input
              type="radio"
              value="apartment"
              id="apartment"
              name="prop_type"
            />
            <label htmlFor="apartment">Apartment</label>
          </PropertyTypeWrapper>
          <PropertyTypeWrapper>
            <input type="radio" value="house" id="house" name="prop_type" />
            <label htmlFor="house">House</label>
          </PropertyTypeWrapper>
        </div>
      </InputWrapper>
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
          </StyledUploader>
          <input type="file" style={{ display: "none" }} />
        </PhotoUploader>
        <p>Only images, max 5MB</p>
      </PhotoSectionContainer>
      <UploadedBoxContainer>
        <UploadedBox>No photos yet</UploadedBox>
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
