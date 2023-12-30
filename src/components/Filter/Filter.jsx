import { FilterWrapper } from './Filter.styled';

export const Filter = ({ handleChangeFilter, text }) => {
  return (
    <FilterWrapper>
      {text}
      <input
        type="text"
        name="name"
        onChange={evt => handleChangeFilter(evt.target.value)}
      />
    </FilterWrapper>
  );
};
