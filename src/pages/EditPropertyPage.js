import styled from "@emotion/styled";
import Input from "../components/Input";
import { BiSearch } from "react-icons/bi";
import { colors, typography } from "../styles";
import { RiMoneyDollarCircleLine, RiUploadLine } from "react-icons/ri";
import { fonts } from "../styles/typography";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useProperties } from "../context/properties-context";
import uploadImages from "../services/cloudinary-service";
import { showProperty, updateProperty } from "../services/properties-service";
import { useLocation, useNavigate } from "react-router-dom";
import { PlacesAutocompletion } from "../components/PlacesAutocompletion";
import InputContainer from "../components/InputPlaceAutocomplete";

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
const default_data = {
  bedrooms: "",
  bathrooms: "",
  area: "",
  photo_urls: [],
  active: true,
  description: "",
  operation_type: {
    type: "for sale",
    price: "",
  },
  address: {
    latitude: "",
    longitude: "",
    name: "",
  },
};

export default function EditPropertyForm() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const { propertyTypes } = useProperties();
  const sampleLocation = useLocation().pathname;
  const id = sampleLocation.split("/")[2];
  const [propertyData, setPropertyData] = useState(default_data);
  useEffect(() => {
    showProperty(id)
      .then((data) => {
        setPropertyData(data);
        console.log(data);
      })
      .catch(console.log);
  }, [id]);
  const location = {
    whereing: propertyData.address.name,
    coordinates: {
      lat: propertyData.address.latitude,
      lng: propertyData.address.longitude,
    },
  };

  const range = Array.from({ length: 10 }, (_, i) => i + 1);

  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;
    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readMultiFiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setImages(newImgsState);

    console.log(newImgsState);
  };

  function readMultiFiles(e, indexInicial) {
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
    setImages(newImgs);
  }

  const changeType = (e) => {
    const newType = e.target.id;
    const selected = e.target;
    const active = document.querySelector(".activeType");
    if (selected !== active) {
      active.classList.remove("activeType");
      selected.classList.add("activeType");
    }
    // const otherFields = newType === "for sale" ? {price:""} : {monthly_rent:"",maintenance:"",pets_allowed:""}
    const operation_type = {
      type: newType,
    };
    setPropertyData({ ...propertyData, operation_type });
  };

  function handleSubmit(e) {
    e.preventDefault();
    images.forEach((img) => {
      const formData = new FormData();
      formData.append("file", img?.file);
      formData.append("upload_preset", "hackf1hx");
      uploadImages(formData)
        .then((data) => {
          const newPhotoUrls = [...propertyData.photo_urls, data.url];
          setPropertyData({
            ...propertyData,
            photo_urls: newPhotoUrls,
          });
        })
        .catch(console.log);
    });
    updateProperty(propertyData, id)
      .then(() => {
        navigate("/myproperties");
      })
      .catch(console.log);
  }

  function handleChange(e) {
    const input = e.target;
    const operation_type = propertyData.operation_type;
    switch (input.name) {
      case "price":
      case "monthly_rent":
      case "maintenance":
        if (input.value < 0) return;
        operation_type[input.name] = input.value;
        return setPropertyData({ ...propertyData, operation_type });
      case "pets_allowed":
        operation_type[input.name] = input.checked;
        return setPropertyData({ ...propertyData, operation_type });
      default:
        return setPropertyData({
          ...propertyData,
          [input.name]: input.value,
        });
    }
  }

  function changeLocation({ whereing, coordinates }) {
    const name = whereing;
    const { lat, lng } = coordinates;
    const address = { name, latitude: lat, longitude: lng };
    setPropertyData({ ...propertyData, address });
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Edit a property listing</h2>
        <TypePicker>
          <Type left={true} id="for rent" onClick={changeType}>
            Rent
          </Type>
          <Type className="activeType" id="for sale" onClick={changeType}>
            Sale
          </Type>
        </TypePicker>
        <div>
          <InputContainer
            width="100%"
            leftIcon={
              <BiSearch size="1.25rem" color={`${colors.secondary[500]}`} />
            }
          >
            <PlacesAutocompletion {...{ location, changeLocation }} />
          </InputContainer>
        </div>
        {propertyData.operation_type.type === "for rent" && (
          <>
            <div>
              <Input
                type="Number"
                name="monthly_rent"
                leftIcon={
                  <RiMoneyDollarCircleLine
                    size="1.25rem"
                    color={`${colors.secondary[500]}`}
                  />
                }
                placeholder="200"
                width="50%"
                onChange={handleChange}
                value={propertyData.operation_type.monthly_rent}
                label="Monthly Rent"
              />
            </div>
            <div>
              <Input
                type="Number"
                name="maintenance"
                leftIcon={
                  <RiMoneyDollarCircleLine
                    size="1.25rem"
                    color={`${colors.secondary[500]}`}
                  />
                }
                placeholder="100"
                width="50%"
                onChange={handleChange}
                value={propertyData.operation_type.maintenance}
                label="Maintenance"
              />
            </div>
          </>
        )}
        {propertyData.operation_type.type === "for sale" && (
          <>
            <div>
              <Input
                type="Number"
                name="price"
                leftIcon={
                  <RiMoneyDollarCircleLine
                    size="1.25rem"
                    color={`${colors.secondary[500]}`}
                  />
                }
                placeholder="100"
                width="50%"
                onChange={handleChange}
                label="Price"
              />
            </div>
          </>
        )}
        <InputWrapper>
          <h4>property type</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            {propertyTypes.map((type) => {
              return (
                <CheckboxWrapper key={type.id}>
                  <input
                    type="radio"
                    value={type.id}
                    id={type.name}
                    name="property_type_id"
                    onChange={handleChange}
                  />
                  <label htmlFor={type.name}>{type.name}</label>
                </CheckboxWrapper>
              );
            })}
          </div>
        </InputWrapper>
        <SelectWrapper>
          <InputWrapper>
            <h5>bedrooms</h5>
            <StyledSelect
              name="bedrooms"
              onChange={handleChange}
              value={propertyData.bedrooms}
            >
              <option value="" disabled hidden>
                Select...
              </option>
              {range.map((n) => {
                return (
                  <option key={n} value={n}>
                    {n}
                  </option>
                );
              })}
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <h5>bathrooms</h5>
            <StyledSelect
              name="bathrooms"
              onChange={handleChange}
              value={propertyData.bathrooms}
            >
              <option value="" disabled hidden>
                Select...
              </option>
              {range.map((n) => {
                return (
                  <option key={n} value={n}>
                    {n}
                  </option>
                );
              })}
            </StyledSelect>
          </InputWrapper>
          <InputWrapper>
            <h5>area</h5>
            <Input
              name="area"
              value={propertyData.area}
              onChange={handleChange}
              placeholder="##"
              width="50%"
            />
          </InputWrapper>
        </SelectWrapper>
        {propertyData.operation_type.type === "for rent" && (
          <>
            <CheckboxWrapper>
              <input
                type="checkbox"
                value="pets_allowed"
                id="pets_allowed"
                name="pets_allowed"
                onChange={handleChange}
              />
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
          <StyledTextArea
            name="description"
            onChange={handleChange}
            value={propertyData.description}
            placeholder="My apartment is great because..."
          />
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
            images.map((image) => (
              <UploadedBox key={image.index}>
                <ImgBox>
                  <ImgDeleteBtn onClick={deleteImg.bind(this, image.index)}>
                    X
                  </ImgDeleteBtn>
                  <img
                    alt="new_pic"
                    src={image.url}
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
