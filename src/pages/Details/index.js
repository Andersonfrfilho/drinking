import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Title, Loading} from './styles';
import * as DetailActions from '../../store/modules/detail/actions';
import Header from '../../components/Header';
import ModalInfo from '../../components/ModalInfo';

export default function Details() {
  const {loading, error, message} = useSelector(state => state.common);
  const {
    strDrink,
    strDrinkAlternate,
    strDrinkES,
    strDrinkDE,
    strDrinkFR,
    strDrinkZH_HANS,
    strDrinkZH_HANT,
    strTags,
    strVideo,
    strCategory,
    strIBA,
    strAlcoholic,
    strGlass,
    strInstructions,
    strInstructionsES,
    strInstructionsDE,
    strInstructionsFR,
    strInstructionsZH_HANS,
    strInstructionsZH_HANT,
    strDrinkThumb,
    strCreativeCommonsConfirmed,
    dateModified,
    ingredients,
  } = useSelector(state => state.detail);
  const dispatch = useDispatch();
  const [stateNameAlternativeDrink, setStateNameAlternativeDrink] = useState(
    strDrink
  );
  const [
    stateInstructionAlternativeDrink,
    setStateInstructionAlternativeDrink,
  ] = useState(strInstructions);
  function handleChangeInfos(nameCountry) {
    if (nameCountry !== null || nameCountry !== undefined) {
      setStateNameAlternativeDrink(nameCountry);
    } else {
      setStateNameAlternativeDrink(strDrink);
    }
  }
  function handleChangeInfosTwo(infoCountry) {
    if (infoCountry !== null || infoCountry !== undefined) {
      setStateInstructionAlternativeDrink(infoCountry);
    } else {
      setStateInstructionAlternativeDrink(strInstructions);
    }
  }
  function handleNameDrink(country) {
    if (country === 'es') {
      handleChangeInfos(strDrinkES);
      handleChangeInfosTwo(strInstructionsES);
    } else if (country === 'fr') {
      handleChangeInfos(strDrinkFR);
      handleChangeInfosTwo(strInstructionsFR);
    } else if (country === 'de') {
      handleChangeInfos(strDrinkDE);
      handleChangeInfosTwo(strInstructionsDE);
    } else if (country === 'jp') {
      handleChangeInfos(strDrinkZH_HANS);
      handleChangeInfosTwo(strInstructionsZH_HANS);
    } else if (country === 'ch') {
      handleChangeInfos(strDrinkZH_HANT);
      handleChangeInfosTwo(strInstructionsZH_HANT);
    }
  }
  function handleClear() {
    dispatch(DetailActions.clearPageRequest());
  }
  return (
    <Container>
      <Header
        iconName="arrow-left"
        title="voltar"
        buttonExist
        functionOnPress={() => handleClear()}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>{strDrink}</Title>
          <ModalInfo
            functionOnPressFlag={flag => handleNameDrink(flag)}
            nameDrink={strDrink}
            nameAlternative={stateNameAlternativeDrink}
            nameDrinkES={strDrinkES}
            nameDrinkDE={strDrinkDE}
            nameDrinkFR={strDrinkFR}
            nameDrinkHanz={strDrinkZH_HANS}
            nameDrinkHant={strDrinkZH_HANT}
            tags={strTags !== null ? strTags.split(',') : []}
            video={strVideo}
            category={strCategory}
            IBA={strIBA}
            alchoolic={strAlcoholic}
            glass={strGlass}
            instructions={stateInstructionAlternativeDrink}
            instructionsES={strInstructionsES}
            instructionsDE={strInstructionsDE}
            instructionsFR={strInstructionsFR}
            instructionsHanz={strInstructionsZH_HANS}
            instructionsHant={strInstructionsZH_HANT}
            photo={strDrinkThumb}
            creativeConformodit={strCreativeCommonsConfirmed}
            modified={dateModified}
            ingredients={ingredients}
            colors={['#79377E', '#361042', '#A64366', '#4B1D56']}
          />
        </>
      )}
    </Container>
  );
}
