import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsFetch } from "../../data/fetching";
import { DetailsLanguages, SearchingHistory } from "../../environment/constans";

import {
  StyledDetailsPage,
  StyledSelectWrapper,
  StyledSelectsWrapper,
} from "./DetailsPage.style";
import { LanguageSwitcher } from "../../components/atoms/Select/LanguageSwitcher";
import { SelectHistory } from "../../components/atoms/Select/SelectHistory";
import { Description } from "../../components/atoms/Description/Description";

export const DetailsPage: React.FC = () => {
  const [DetailsPage, setDetailsPage] = useState("");
  const { lang, name } = useParams();

  const [availableLang, setAvailableLang] = useState<DetailsLanguages[]>([]);
  const [history, setHistory] = useState<SearchingHistory[]>([]);

  useEffect(() => {
    if (name != undefined && lang != undefined) {
      detailsFetch(setDetailsPage, setAvailableLang, name, lang);
    }
  }, [name, lang]);

  useEffect(() => {
    setHistory([...history, { code: lang, key: name }]);
    const histCheck = localStorage.getItem("searchHistory");
    if (histCheck != null || histCheck != undefined) {
      setHistory(JSON.parse(histCheck));
    }
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [DetailsPage, name, lang]);

  return (
    <>
      <StyledSelectsWrapper>
        <StyledSelectWrapper>
          <Description child="Switch article language version" footer />
          <LanguageSwitcher values={availableLang} />
        </StyledSelectWrapper>
        <StyledSelectWrapper>
          <Description child="See search history" footer />
          <SelectHistory values={history} />
        </StyledSelectWrapper>
      </StyledSelectsWrapper>
      <StyledDetailsPage srcDoc={DetailsPage}></StyledDetailsPage>
    </>
  );
};
