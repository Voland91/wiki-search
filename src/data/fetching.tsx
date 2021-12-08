import {
  API_SEARCH_URL as searchUrl,
  API_DETAILS_URL as detailsUrl,
} from "../environment/constans";

import { SearchingResult, DetailsLanguages } from "../environment/interfaces";

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
  languages: (value: React.SetStateAction<DetailsLanguages[]>) => void,
  name: string,
  lang: string
): void => {
  doFetch(`https://${lang}.${detailsUrl}/${name}/links/language`).then(
    (data) => {
      languages(data);
    }
  );
};
