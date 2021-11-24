import { Result } from "../environment/constans";

const doFetch = (customUrl: string) => {
  return fetch(customUrl)
    .then((res) => {
      return res.json();
    })
    .catch((err) => err.message);
};

export const searchFetch = (
  state: (value: React.SetStateAction<Result[]>) => void,
  search: string
): void => {
  doFetch(
    `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${search}&limit=2`
  ).then((data) => {
    state(data.pages);
  });
};
