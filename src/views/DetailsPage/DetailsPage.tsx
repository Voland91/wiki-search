import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsFetch } from "../../data/fetching";
import { DetailsLanguages } from "../../environment/constans";

import { StyledDetailsPage, StyledSelectWrapper } from "./DetailsPage.style";
import { Select } from "../../components/atoms/Select/Select";
import { Description } from "../../components/atoms/Description/Description";

export const DetailsPage: React.FC = () => {
  const [DetailsPage, setDetailsPage] = useState("");
  const { lang, name } = useParams();
  const [detailsName, setDetailsName] = useState(name);
  const [detailsLanguage, setDetailsLanguage] = useState(lang);
  const [availableLang, setAvailableLang] = useState<DetailsLanguages[]>([]);

  useEffect(() => {
    if (detailsName != undefined && detailsLanguage != undefined) {
      detailsFetch(
        setDetailsPage,
        setAvailableLang,
        detailsName,
        detailsLanguage
      );
    }
  }, [detailsName, detailsLanguage]);

  const handleChangeSearchLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const data = e.target.value.split(",");
    setDetailsLanguage(data[0]);
    setDetailsName(data[1]);
  };

  return (
    <>
      <StyledSelectWrapper>
        <Description child="Choose article language version" footer />
        <Select
          handleChangeSearchLanguage={handleChangeSearchLanguage}
          values={availableLang}
        />
      </StyledSelectWrapper>
      <StyledDetailsPage
        dangerouslySetInnerHTML={{ __html: DetailsPage }}
      ></StyledDetailsPage>
    </>
  );
};
