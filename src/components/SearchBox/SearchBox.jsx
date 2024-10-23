//import css from './SearchBox.module.css'
import { useSelector } from 'react-redux';

import { setStatusFilter} from '../../redux/filtersSlice'; 
import { useDispatch } from 'react-redux';

const SearchBox = () => {

  const filter = useSelector((state) => state.filters.status);
    const dispatch = useDispatch();
    const handleFilterChange = (event) => {
        dispatch(setStatusFilter(event.target.value));
      };

      return(
        <>
         <p>Find contacts by name</p>
         <input type='text' onChange={handleFilterChange} value={filter} />
         </>
        )
}

export default SearchBox;