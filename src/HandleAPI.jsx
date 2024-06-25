// const myHeaders = new Headers();
// myHeaders.append(
//   "Authorization",
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXJhcGkuYXBwIiwic3ViIjoiNWM3ZTNmMGMtYTYxOC00OGI1LWE5NTYtOTM5OGY5NTY1OGZiIiwiYXVkIjoiNWM3ZTNmMGMtYTYxOC00OGI1LWE5NTYtOTM5OGY5NTY1OGZiIiwiZXhwIjoxNzE2NDY5Nzk5LCJpYXQiOjE3MTU4NjQ5OTksImp0aSI6IjQwYmQ1MTM3LWQyZWEtNGNhZS04OGY4LTkwZmEzNjcwZDc5NCIsInVzZXIiOnsic3Vic2NyaWJlZCI6ZmFsc2UsInN1YnNjcmlwdGlvbiI6bnVsbCwicmF0ZV9saW1pdF90eXBlIjoiaGFyZCIsImFkZG9ucyI6eyJhbnRpcXVlX3ZlaGljbGVzIjpmYWxzZSwiZGF0YV9mZWVkIjpmYWxzZX19fQ.kfDLj7-8WfIXRG9aumibMTpAxtXGWEtb_we_oVWssN4"
// );

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

export async function fetchCarImages(year, make, selectedModel) {
  try {
    console.log(year, make, selectedModel);
    const response = await fetch(
      `https://real-time-image-search.p.rapidapi.com/search?query=${
        (year, make, selectedModel)
      }`,
      carImageOptions
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
    return [];
  }
}
