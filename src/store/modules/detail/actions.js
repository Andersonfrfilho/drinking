export function addDetailDrink(info, ingredients) {
  return {
    type: '@detail/ADD_DRINK',
    payload: {
      info,
      ingredients,
    },
  };
}
