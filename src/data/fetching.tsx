import {
  EN_API_SEARCH_URL as enUrl,
  PL_API_SEARCH_URL as plUrl,
  EN_API_DETAILS_URL as enDetailsUrl,
  PL_API_DETAILS_URL as plDetailsUrl,
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
  search: string,
  searchLanguage: string
): void => {
  switch (searchLanguage) {
    case "english":
      doFetch(`${enUrl + search}&limit=5`).then((data) => {
        state(data.pages);
      });
      break;
    case "polish":
      doFetch(`${plUrl + search}&limit=5`).then((data) => {
        state(data.pages);
      });
      break;
  }
};

export const detailsFetch = (
  state: (value: React.SetStateAction<SearchDetails[]>) => void,
  search: string
): void => {
  doFetch(`${enDetailsUrl}summary/${search}`).then((data) => {
    state(data.extract);
  });
};
