export default async function getGeocode({longitude,latitude}){
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=country,region&access_token=pk.eyJ1IjoiZGF2aWRtMjQwNSIsImEiOiJjbDh1aXlpeTEwNGR6M3FwazVxMnQ0aWZ6In0.F590aJ4ztzGjREG9ypUnig`
  )
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(JSON.stringify(data.errors||data));
  }
  try {
    const res = await response.json();
    data = res.features[0]?.place_name
  } catch (error) {
    data = response.statusText;
  }
  return data;
}


