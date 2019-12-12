export function addInfos(title, drinks) {
  return {
    type: '@drinks/ADD_INFOS',
    payload: {title, drinks},
  };
}
export function DrinkRequest(id) {
  return {
    type: '@drinks/ADD_REQUEST',
    payload: {id},
  };
}
