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

  return (
    <Container>
      <Header iconName="arrow-left" title="voltar" buttonExist />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>{strDrink}</Title>
          <ModalInfo
            nameDrink={strDrink}
            nameAlternative={strDrinkAlternate}
            nameDrinkES={strDrinkES}
            nameDrinkDE={strDrinkDE}
            nameDrinkFR={strDrinkFR}
            nameDrinkHanz={strDrinkZH_HANS}
            nameDrinkHant={strDrinkZH_HANT}
            tags={strTags}
            video={strVideo}
            category={strCategory}
            IBA={strIBA}
            alchoolic={strAlcoholic}
            glass={strGlass}
            instructions={strInstructions}
            instructionsES={strInstructionsES}
            instructionsDE={strInstructionsDE}
            instructionsFR={strInstructionsFR}
            instructionsHanz={strInstructionsZH_HANS}
            instructionsHant={strInstructionsZH_HANT}
            photo={strDrinkThumb}
            creativeConformodit={strCreativeCommonsConfirmed}
            modified={dateModified}
            ingredients={ingredients}
          />
        </>
      )}
    </Container>
  );
}
