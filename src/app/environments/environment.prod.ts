export const environment = {
  production: true,
  API:
    location.protocol +
    "//" +
    location.hostname +
    "/" +
    location.pathname.split("/")[1],
  token: localStorage.getItem("token")
};

console.log("environment.prod.ts -> environment.API = ", environment.API);
