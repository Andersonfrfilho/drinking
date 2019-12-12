export function categoryDrinkRequest(link, name) {
  return {
    type: '@category/DRINK_REQUEST',
    payload: {
      link,
      name,
    },
  };
}
