import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case 'SEARCH':
      return _.mapKeys(action.payload);
    case 'NO_PLATES':
      return action.payload;
    default: return state;
  }
}
