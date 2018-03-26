export function searchAction(term) {
  return {
    type: 'SEARCH',
    payload: term
  }
}
