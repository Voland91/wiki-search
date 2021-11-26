import { useEffect, useState } from "react";
import { detailsFetch } from "../data/fetching";
import { SearchDetails } from "../environment/constans";
// import wiki from "wikipedia";

interface DetailsPageProps {
  searchName: string;
}

export const DetailsPage: React.FC<DetailsPageProps> = ({ searchName }) => {
  const [searchSummary, setSearchSummary] = useState<SearchDetails[]>([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const page = await wiki("Batman");
  //       const summary = await page.summary();
  //       console.log(page);
  //       // dupa.forEach(i => console.log(i.imageinfo))
  //       // dupa.items.forEach(e => console.log(e.srcset))
  //       //Response of type @wikiSummary - contains the intro and the main image
  //     } catch (error) {
  //       return error;
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    setSearch(searchName);
    detailsFetch(setSearchSummary, search);
  }, []);

  return (
    <>
      <p>{searchSummary}</p>
    </>
  );
};
