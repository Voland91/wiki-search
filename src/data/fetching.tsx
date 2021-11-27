import {
  API_SEARCH_URL as url,
  API_DETAILS_URL as detailsUrl,
  SearchResult,
  SearchDetails,
} from "../environment/constans";

const doFetch = (customUrl: string) => {
  return fetch(customUrl)
    .then((res) => {
      return res.json();
    })
    .catch((err) => err.message);
};

export const searchFetch = (
  state: (value: React.SetStateAction<SearchResult[]>) => void,
  search: string
): void => {
  doFetch(`${url + search}&limit=5`).then((data) => {
    state(data.pages);
  });
};

export const detailsFetch = (
  state: (value: React.SetStateAction<SearchDetails[]>) => void,
  search: string
): void => {
  doFetch(`${detailsUrl}summary/${search}`).then((data) => {
    state(data.extract);
  });
};
