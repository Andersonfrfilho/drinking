import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import YouTube from 'react-native-youtube';
import {Container, Title, Loading, ScrollView} from './styles';
import * as DetailActions from '../../store/modules/detail/actions';
import Header from '../../components/Header';
import ModalInfo from '../../components/ModalInfo';
import ModalVideo from '../../components/ModalVideo';

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
  const [stateVideoActivity, setStateVideoActivity] = useState(false);
  const [statePlay, setStatePlay] = useState({
    isReady: false,
    status: '',
    quality: '',
    error: '',
  });
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
    } else {
      handleChangeInfos(strDrink);
      handleChangeInfosTwo(strInstructions);
    }
  }
  function handleClear() {
    dispatch(DetailActions.clearPageRequest());
  }
  function youtubePlayer(videoId = '') {
    return (
      // acabei não encontrando um drink que contenha video para analisar o link
      <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        play // control playback of video with true/false
        apiKey="AIzaSyAn_gTdl_gCKC94c3TdU-C-A5UNIqeAalQ"
        onReady={e => setStatePlay({isReady: true})}
        onChangeState={e => setStatePlay({status: e.state})}
        onChangeQuality={e => setStatePlay({quality: e.quality})}
        onError={e => setStatePlay({error: e.error})}
        style={{alignSelf: 'stretch', height: 300}}
      />
    );
  }
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <Container>
        <Header
          iconName="arrow-left"
          title="voltar"
          buttonExist
          functionOnPress={() => handleClear()}
        />
        {stateVideoActivity ? youtubePlayer('idVideo') : null}
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
              functionOnPressIconVideo={() => setStateVideoActivity(true)}
            />
          </>
        )}
      </Container>
    </ScrollView>
  );
}
