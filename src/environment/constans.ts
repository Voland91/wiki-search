export const API_SEARCH_URL =
  "https://en.wikipedia.org/w/rest.php/v1/search/page?q=";
export const LIMIT_SEARCH_URL = "&limit=10";

export const API_DETAILS_URL = "https://en.wikipedia.org/w/rest.php/v1/page/";

export interface SearchResult {
  id: number;
  key: string;
  title: string;
  excerpt: string;
  description: string;
  thumbnail: {
    mimetype: string;
    size: null;
    width: number;
    height: number;
    duration: null;
    url: string;
  };
}

export interface SearchDetails {
  id: number;
  key: string;
  title: string;
  latest: {
    id: number;
    timestamp: string;
  };
  content_model: string;
  license: {
    url: string;
    title: string;
  };
  html: string;
}
