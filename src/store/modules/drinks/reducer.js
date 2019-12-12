import produce from 'immer';

const INITIAL_STATE = {
  title: '',
  drinks: [],
};
export default function drinks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@drinks/ADD_INFOS':
      return produce(state, draft => {
        draft.title = action.payload.title;
        draft.drinks = action.payload.drinks;
      });
    default:
      return state;
  }
}
