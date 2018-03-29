export default function(state={}, action) {
  switch(action.type) {
    case 'RATING':
      return {...state, 'rating':action.payload.ratingCount}
    case 'NO_RATING':
      return action.payload
    default: return state
  }
}
