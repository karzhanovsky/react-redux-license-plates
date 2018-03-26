import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case 'SEARCH':
      return _.mapKeys(action.payload);
    default: return state;
  }
  return state;
}
