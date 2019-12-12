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
        draft.strDrinkZH_HANS = action.payload.info.strDrinkZH_HANS;
        draft.strDrinkZH_HANT = action.payload.info.strDrinkZH_HANT;
        draft.strTags = action.payload.info.strTagsstrTags;
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
          action.payload.info.strInstructionsZH_HANS;
        draft.strInstructionsZH_HANT =
          action.payload.info.strInstructionsZH_HANT;
        draft.strDrinkThumb = action.payload.info.strDrinkThumb;
        draft.strCreativeCommonsConfirmed =
          action.payload.info.strCreativeCommonsConfirmed;
        draft.dateModified = action.payload.info.dateModified;
        draft.ingredients = action.payload.ingredients;
      });
    default:
      return state;
  }
}
