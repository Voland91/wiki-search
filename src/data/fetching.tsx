import {
  API_SEARCH_URL as url,
  LIMIT_SEARCH_URL as limit,
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
  doFetch(`${url + search + limit}`).then((data) => {
    state(data.pages);
  });
};

export const detailsFetch = (
  state: (value: React.SetStateAction<SearchDetails[]>) => void
): void => {
  doFetch(`${detailsUrl}jupiter/with_html`).then((data) => {
    state(data.html);
  });
};
