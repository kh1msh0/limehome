const BASE_API = "https://api.limehome.com/";

export const getProperties = async (setData) => {
  try {
    let response = await fetch(
      `${BASE_API}properties/v1/public/properties/210`
    );
    let json = await response.json();

    setData(json.payload);
  } catch (error) {
    console.log();
  }
};
