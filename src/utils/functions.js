import { IS_PROD } from "./constants";

export const getCurrentYear = () => {
  const d = new Date();
  return d.getFullYear();
};

const handleApiErrors = (response) => {
  if (!response.ok) throw Error("Fetching data error");
  return response;
};

export default () =>
  IS_PROD
    ? fetch(LAMBDA_ENDPOINT)
        .then(handleApiErrors)
        .then((res) => res.json())
    : new Promise((resolve) => resolve({}));
