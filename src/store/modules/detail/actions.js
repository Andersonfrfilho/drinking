export function addDetailDrink(info, ingredients) {
  return {
    type: '@detail/ADD_DRINK',
    payload: {
      info,
      ingredients,
    },
  };
}
export function clearPageRequest() {
  return {
    type: '@detail/CLEAR_REQUEST',
  };
}
export function clearDetailSuccess() {
  return {
    type: '@detail/CLEAR_REQUEST_SUCCESS',
  };
}
