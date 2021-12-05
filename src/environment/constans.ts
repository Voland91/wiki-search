export const API_SEARCH_URL = "wikipedia.org/w/rest.php/v1/search/page";
export const API_DETAILS_URL = "wikipedia.org/w/rest.php/v1/page";

export interface SearchingResult {
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

export interface DetailsLanguages {
  code: string;
  name: string;
  key: string;
  title: string;
}

export interface SearchingLanguages {
  code: string;
  name: string;
}

export interface SearchingHistory {
  lang: string;
  name: string;
}
