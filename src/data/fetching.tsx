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

const doFetchString = (customUrl: string) => {
  return fetch(customUrl)
    .then((res) => {
      return res.text();
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
  name: string,
  lang: string
): void => {
  doFetchString(`https://${lang}.${detailsUrl}/${name}/html`).then((data) => {
    state(data);
  });
  doFetch(`https://${lang}.${detailsUrl}/${name}/links/language`).then(
    (data) => {
      languages(data);
    }
  );
};
