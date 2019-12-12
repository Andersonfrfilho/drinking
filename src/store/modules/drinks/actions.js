export function addInfos(title, drinks) {
  return {
    type: '@drinks/ADD_INFOS',
    payload: {title, drinks},
  };
}
export function DrinkRequest(link) {
  return {
    type: '@drinks/ADD_REQUEST',
    payload: {link},
  };
}
