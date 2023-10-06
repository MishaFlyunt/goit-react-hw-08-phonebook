import { useDispatch, useSelector } from 'react-redux';

import { LabelStyled, FilterStyled } from './Filter.styled';
import { selectFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/filtersSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <LabelStyled>
        <h3>Find contacts by name</h3>
        <input
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