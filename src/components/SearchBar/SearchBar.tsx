import { Input } from "../atoms/Input/Input";
import { Select } from "../atoms/Select/Select";

interface SearchBarProps {
  handleChangeSearchLanguage: React.ChangeEventHandler<HTMLSelectElement>;
  handleSetSearch: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleChangeSearchLanguage,
  handleSetSearch,
  search,
}) => {
  return (
    <>
      <Select handleChangeSearchLanguage={handleChangeSearchLanguage} />
      <Input handleSetSearch={handleSetSearch} search={search} />
    </>
  );
};
