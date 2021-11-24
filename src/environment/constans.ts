export const API_URL =
  "https://en.wikipedia.org/w/rest.php/v1/search/page?q=jupiter&limit=2";

export interface Result {
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
