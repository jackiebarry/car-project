const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXJhcGkuYXBwIiwic3ViIjoiNWM3ZTNmMGMtYTYxOC00OGI1LWE5NTYtOTM5OGY5NTY1OGZiIiwiYXVkIjoiNWM3ZTNmMGMtYTYxOC00OGI1LWE5NTYtOTM5OGY5NTY1OGZiIiwiZXhwIjoxNzE2NDY5Nzk5LCJpYXQiOjE3MTU4NjQ5OTksImp0aSI6IjQwYmQ1MTM3LWQyZWEtNGNhZS04OGY4LTkwZmEzNjcwZDc5NCIsInVzZXIiOnsic3Vic2NyaWJlZCI6ZmFsc2UsInN1YnNjcmlwdGlvbiI6bnVsbCwicmF0ZV9saW1pdF90eXBlIjoiaGFyZCIsImFkZG9ucyI6eyJhbnRpcXVlX3ZlaGljbGVzIjpmYWxzZSwiZGF0YV9mZWVkIjpmYWxzZX19fQ.kfDLj7-8WfIXRG9aumibMTpAxtXGWEtb_we_oVWssN4"
);

const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "12989ced08msh2b523603de5ccd7p1c52a5jsn7e33be4174a6",
    "x-rapidapi-host": "car-api2.p.rapidapi.com",
  },
  redirect: "follow",
};

export async function fetchCarModels(year) {
  try {
    const response = await fetch(
      `https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id&year=${year}&verbose=yes`,
      requestOptions
    );
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
