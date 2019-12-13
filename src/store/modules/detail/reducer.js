import produce from 'immer';

const INITIAL_STATE = {
  strDrink: null,
  strDrinkAlternate: null,
  strDrinkES: null,
  strDrinkDE: null,
  strDrinkFR: null,
  strDrinkZH_HANS: null,
  strDrinkZH_HANT: null,
  strTags: null,
  strVideo: null,
  strCategory: null,
  strIBA: null,
  strAlcoholic: null,
  strGlass: null,
  strInstructions: null,
  strInstructionsES: null,
  strInstructionsDE: null,
  strInstructionsFR: null,
  strInstructionsZH_HANS: null,
  strInstructionsZH_HANT: null,
  strDrinkThumb: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
  ingredients: null,
};
export default function detail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@detail/ADD_DRINK':
      return produce(state, draft => {
        draft.strDrink = action.payload.info.strDrink;
        draft.strDrinkAlternate = action.payload.info.strDrinkAlternate;
        draft.strDrinkES = action.payload.info.strDrinkES;
        draft.strDrinkDE = action.payload.info.strDrinkDE;
        draft.strDrinkFR = action.payload.info.strDrinkFR;
        draft.strDrinkZH_HANS = action.payload.info['strDrinkZH-HANS'];
        draft.strDrinkZH_HANT = action.payload.info['strDrinkZH-HANT'];
        draft.strTags = action.payload.info.strTags;
        draft.strVideo = action.payload.info.strVideo;
        draft.strCategory = action.payload.info.strCategory;
        draft.strIBA = action.payload.info.strIBA;
        draft.strAlcoholic = action.payload.info.strAlcoholic;
        draft.strGlass = action.payload.info.strGlass;
        draft.strInstructions = action.payload.info.strInstructions;
        draft.strInstructionsES = action.payload.info.strInstructionsES;
        draft.strInstructionsDE = action.payload.info.strInstructionsDE;
        draft.strInstructionsFR = action.payload.info.strInstructionsFR;
        draft.strInstructionsZH_HANS =
          action.payload.info['strInstructionsZH-HANS'];
        draft.strInstructionsZH_HANT =
          action.payload.info['strInstructionsZH-HANT'];
        draft.strDrinkThumb = action.payload.info.strDrinkThumb;
        draft.strCreativeCommonsConfirmed =
          action.payload.info.strCreativeCommonsConfirmed;
        draft.dateModified = action.payload.info.dateModified;
        draft.ingredients = action.payload.ingredients;
      });
    case '@detail/CLEAR_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.strDrink = null;
        draft.strDrinkAlternate = null;
        draft.strDrinkES = null;
        draft.strDrinkDE = null;
        draft.strDrinkFR = null;
        draft.strDrinkZH_HANS = null;
        draft.strDrinkZH_HANT = null;
        draft.strTags = null;
        draft.strVideo = null;
        draft.strCategory = null;
        draft.strIBA = null;
        draft.strAlcoholic = null;
        draft.strGlass = null;
        draft.strInstructions = null;
        draft.strInstructionsES = null;
        draft.strInstructionsDE = null;
        draft.strInstructionsFR = null;
        draft.strInstructionsZH_HANS = null;
        draft.strInstructionsZH_HANT = null;
        draft.strDrinkThumb = null;
        draft.strCreativeCommonsConfirmed = null;
        draft.dateModified = null;
        draft.ingredients = null;
      });
    default:
      return state;
  }
}
