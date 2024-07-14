const carRequestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "12989ced08msh2b523603de5ccd7p1c52a5jsn7e33be4174a6",
    "x-rapidapi-host": "car-api2.p.rapidapi.com",
  },
  redirect: "follow",
};

const carImageOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "12989ced08msh2b523603de5ccd7p1c52a5jsn7e33be4174a6",
    "x-rapidapi-host": "real-time-image-search.p.rapidapi.com",
  },
};

export async function fetchCarMakes(year) {
  try {
    const response = await fetch(
      `https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id&year=${year}&verbose=yes`,
      carRequestOptions
    );
    const result = await response.json();
    // console.log(result);
    const makes = result.data.map((item) => item.name);

    // console.log(makes);
    // for (const name in result.data) {
    //   console.log(name);
    // }
    return makes;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchCarModels(make, year) {
  try {
    const response = await fetch(
      `https://car-api2.p.rapidapi.com/api/models?direction=asc&sort=id&make=${make}&verbose=yes&year=${year}`,
      carRequestOptions
    );
    const result = await response.json();
    // console.log(result);
    const models = result.data.map((item) => item.name);
    // console.log(models);
    return models;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchCarTrims(year, make, model) {
  try {
    console.log(year, make, model);
    const response = await fetch(
      `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=id&year=${year}&verbose=yes&make=${make}&model=${model}`,
      carRequestOptions
    );
    const result = await response.json();
    console.log(result);
    const allTrims = result.data.map((item) => item.name);
    const trims = Array.from(new Set(allTrims));

    // put following into local storage

    const allDescriptions = result.data.map((item) => item.description);
    const descriptions = Array.from(new Set(allDescriptions));
    localStorage.setItem(
      year + " " + make + " " + model + " description",
      descriptions
    );

    const allMsrps = result.data.map((item) => item.msrp);
    const msrp = Array.from(new Set(allMsrps));
    console.log(msrp);
    localStorage.setItem(year + " " + make + " " + model + " msrp", msrp);

    return trims;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchCarDetails(year, make, model, selectedTrim) {
  try {
    console.log(year, make, model, selectedTrim);
    const response = await fetch(
      `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=id&year=${year}&verbose=yes&make=${make}&model=${model}&trim=${selectedTrim}`,
      carRequestOptions
    );
    const result = await response.json();
    console.log(result);

    const details = {
      description: result.data[0].description,
      msrp: result.data[0].msrp,
    };

    return details;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchCarImages(year, make, model, selectedTrim) {
  try {
    console.log(year, make, model, selectedTrim);
    const response = await fetch(
      `https://real-time-image-search.p.rapidapi.com/search?query=${
        year + make + model + selectedTrim
      }`,
      carImageOptions
    );
    const result = await response.json();
    const image = result.data[1].thumbnail_url;
    console.log(image);
    return image;
  } catch (error) {
    console.error(error);
    return [];
  }
}
