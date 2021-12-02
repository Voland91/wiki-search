import {
  API_SEARCH_URL as url,
  EN_API_DETAILS_URL as enDetailsUrl,
  PL_API_DETAILS_URL as plDetailsUrl,
  SearchingResult,
  SearchingDetails,
} from "../environment/constans";

const doFetch = (customUrl: string) => {
  return fetch(customUrl)
    .then((res) => {
      return res.json();
    })
    .catch((err) => err.message);
};

export const searchFetch = (
  state: (value: React.SetStateAction<SearchingResult[]>) => void,
  search: string,
  searchLanguage: string
): void => {
  doFetch(`https://${searchLanguage}.${url + search}&limit=5`).then((data) => {
    state(data.pages);
  });
};

export const detailsFetch = (
  state: (value: React.SetStateAction<SearchingDetails[]>) => void,
  search: string
): void => {
  doFetch(`${enDetailsUrl}summary/${search}`).then((data) => {
    state(data.extract);
  });
};
