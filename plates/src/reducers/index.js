import { combineReducers } from 'redux';
import SearchReducer from './search-reducer';
import RatingDerucer from './rating-reducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  rating: RatingDerucer
});

export default rootReducer;
