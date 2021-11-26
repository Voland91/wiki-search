import { useEffect, useState } from "react";
import { detailsFetch } from "../data/fetching";
import { SearchDetails } from "../environment/constans";

export const DetailsPage: React.FC = () => {
  const [searchDetails, setSeacrhDetails] = useState<SearchDetails[]>([]);

  useEffect(() => {
    detailsFetch(setSeacrhDetails);
  }, []);

  return <>{searchDetails}</>;
};
