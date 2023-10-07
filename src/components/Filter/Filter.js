import { useDispatch, useSelector } from 'react-redux';

import { LabelStyled, FilterStyled, Input } from './Filter.styled';
import { selectFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/filtersSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <LabelStyled>
        <h4>Search by name</h4>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => {
            dispatch(filterContact(e.target.value.toLowerCase().trim()));
          }}
        />
      </LabelStyled>
    </FilterStyled>
  );
};
