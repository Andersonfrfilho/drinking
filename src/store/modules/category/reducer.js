import produce from 'immer';

const INITIAL_STATE = {
  categorys: [
    {
      name: 'Drinks Comuns',
      nameIcon: 'glass-stange',
      link:
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
    },
    {
      name: 'Cocktail',
      nameIcon: 'glass-cocktail',
      link: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
    },
  ],
};
export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
