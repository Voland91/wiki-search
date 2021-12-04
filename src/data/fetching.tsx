import {
  API_SEARCH_URL as searchUrl,
  API_DETAILS_URL as detailsUrl,
  SearchingResult,
  DetailsLanguages,
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
  languages: (value: React.SetStateAction<DetailsLanguages[]>) => void,
  detailsName: string,
  detailsLanguage: string
): void => {
  doFetch(
    `https://${detailsLanguage}.${detailsUrl}/${detailsName}/with_html`
  ).then((data) => {
    state(data.html);
  });
  doFetch(
    `https://${detailsLanguage}.${detailsUrl}/${detailsName}/links/language`
  ).then((data) => {
    languages(data);
  });
};
