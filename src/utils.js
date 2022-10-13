import uploadImages from "./services/cloudinary-service";

export function isVowel(x) {
  return /[aeiouAEIOU]/.test(x);
}

export function submitImages(imgArr) {
  return imgArr.map(async (img) => {
    const formData = new FormData();
    formData.append("file", img?.file);
    formData.append("upload_preset", "hackf1hx");
    let uploadedImg;
    try {
      uploadedImg = await uploadImages(formData);
    } catch (error) {
      console.log(error);
    }
    return uploadedImg?.url;
  });
}

export function readMultiFiles(e, indexInicial) {
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
