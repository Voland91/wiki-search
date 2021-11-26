export const API_SEARCH_URL =
  "https://en.wikipedia.org/w/rest.php/v1/search/page?q=";

export const API_DETAILS_URL = "https://en.wikipedia.org/api/rest_v1/page/";

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
  type: string;
  title: string; // title of the page
  displaytitle: string; // title of the page
  namespace: { id: number; text: string };
  wikibase_item: string;
  titles: { canonical: string; normalized: string; display: string };
  pageid: number; // page Id
  thumbnail: {
    // Thumbnail for the page
    source: string;
    width: number;
    height: number;
  };
  originalimage: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: {
    // The urls will be here
    desktop: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
    mobile: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
  };
  extract: string;
  extract_html: string;
  normalizedtitle?: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
}
