import { useEffect, useState } from "react";
import { detailsFetch } from "../../data/fetching";
import { StyledDetailsPage } from "./DetailsPage.style";

interface DetailsPageProps {
  searchName: string;
}

export const DetailsPage: React.FC<DetailsPageProps> = ({ searchName }) => {
  const [searchSummary, setSearchSummary] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchName);
    search != "" && detailsFetch(setSearchSummary, search);
  }, [search]);

  return (
    <StyledDetailsPage
      dangerouslySetInnerHTML={{ __html: searchSummary }}
    ></StyledDetailsPage>
  );
};
