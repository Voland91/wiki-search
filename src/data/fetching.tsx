import {
  API_SEARCH_URL as searchUrl,
  API_DETAILS_URL as detailsUrl,
  SearchingResult,
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
  doFetch(`https://${searchLanguage}.${searchUrl}?q=${search}&limit=5`).then(
    (data) => {
      state(data.pages);
    }
  );
};

export const detailsFetch = (
  state: (value: React.SetStateAction<string>) => void,
  search: string
): void => {
  doFetch(`https://en.${detailsUrl}/${search}/with_html`).then((data) => {
    state(data.html);
  });
};
