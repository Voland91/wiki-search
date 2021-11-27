import { StyledInput } from "./Input.style";

interface InputProps {
  handleSetSearch: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
}

export const Input: React.FC<InputProps> = ({ handleSetSearch, search }) => {
  return (
    <StyledInput
      autoComplete="false"
      type="text"
      value={search}
      onChange={handleSetSearch}
      placeholder="Search Wikipedia"
    />
  );
};
