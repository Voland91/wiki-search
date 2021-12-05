import { SearchingLanguages } from "../../../environment/constans";
import { searchingLanguages } from "../../../utils/languages";
import { Input } from "../../atoms/Input/Input";
import { Select } from "../../atoms/Select/Select";

interface SearchBarProps {
  handleChangeSearchLanguage: React.ChangeEventHandler<HTMLSelectElement>;
  handleSetSearch: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
  searchingLanguages: SearchingLanguages[];
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleChangeSearchLanguage,
  handleSetSearch,
  search,
}) => {
  return (
    <>
      <Select
        handleChangeSearchLanguage={handleChangeSearchLanguage}
        values={searchingLanguages}
      />
      <Input handleSetSearch={handleSetSearch} search={search} />
    </>
  );
};
