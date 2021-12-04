import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsFetch } from "../../data/fetching";
import { StyledDetailsPage } from "./DetailsPage.style";

export const DetailsPage: React.FC = () => {
  const [searchSummary, setSearchSummary] = useState("");
  const { name } = useParams();

  useEffect(() => {
    name != undefined && detailsFetch(setSearchSummary, name);
  }, [name]);

  return (
    <StyledDetailsPage
      dangerouslySetInnerHTML={{ __html: searchSummary }}
    ></StyledDetailsPage>
  );
};
