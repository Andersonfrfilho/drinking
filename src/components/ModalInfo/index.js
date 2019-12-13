import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  AreaImageInfo,
  AreaImage,
  Photo,
  AreaInfo,
  AreaCountry,
  AreaText,
  Title,
  AreaTitle,
  List,
  AreaDescription,
  Text,
  AreaCountryFlag,
  Ingredients,
  BarInfo,
  IconArea,
  Icon,
  AreaModify,
  AreaTextIngredients,
  AreaTextProductIngredient,
  AreaTextAmountIngredient,
  AreaTextCaracteristic,
  Tags,
} from './styles';
import EspanhaFlag from '../../../assets/images/espanha.png';
import EspanhaFlagOff from '../../../assets/images/espanhaOff.png';
import FranchFlag from '../../../assets/images/franch.png';
import FranchFlagOff from '../../../assets/images/franchOff.png';
import DeutchFlag from '../../../assets/images/deutch.png';
import DeutchFlagOff from '../../../assets/images/deutchOff.png';
import JapanFlag from '../../../assets/images/japan.png';
import JapanFlagOff from '../../../assets/images/japanOff.png';
import ChinaFlag from '../../../assets/images/china.png';
import ChinaFlagOff from '../../../assets/images/chinaOff.png';

export default function ModalInfo({
  nameDrink,
  nameAlternative,
  nameDrinkES,
  nameDrinkDE,
  nameDrinkFR,
  nameDrinkHanz,
  nameDrinkHant,
  tags,
  video,
  category,
  IBA,
  alchoolic,
  glass,
  instructions,
  instructionsES,
  instructionsDE,
  instructionsFR,
  instructionsHanz,
  instructionsHant,
  photo,
  creativeConformodit,
  modified,
  ingredients,
  functionOnPressFlag,
  colors,
}) {
  return (
    <Container>
      <AreaImageInfo>
        <AreaImage>
          <Photo
            source={{
              uri: `${photo}`,
            }}
          />
        </AreaImage>
        <AreaInfo>
          <AreaCountry>
            <AreaCountryFlag
              onPress={flag => functionOnPressFlag('es')}
              disabled={nameDrinkES === null && instructionsES === null}>
              <Photo
                source={
                  nameDrinkES === null && instructionsES === null
                    ? EspanhaFlagOff
                    : EspanhaFlag
                }
              />
            </AreaCountryFlag>
            <AreaCountryFlag
              onPress={flag => functionOnPressFlag('fr')}
              disabled={nameDrinkFR === null && instructionsFR === null}>
              <Photo
                source={
                  nameDrinkFR === null && instructionsFR === null
                    ? FranchFlagOff
                    : FranchFlag
                }
              />
            </AreaCountryFlag>
            <AreaCountryFlag
              onPress={flag => functionOnPressFlag('de')}
              disabled={nameDrinkDE === null && instructionsDE === null}>
              <Photo
                source={
                  nameDrinkDE === null && instructionsDE === null
                    ? DeutchFlagOff
                    : DeutchFlag
                }
              />
            </AreaCountryFlag>
            <AreaCountryFlag
              onPress={flag => functionOnPressFlag('jp')}
              disabled={nameDrinkHanz === null && instructionsHanz === null}>
              <Photo
                source={
                  nameDrinkHanz === null && instructionsHanz === null
                    ? JapanFlagOff
                    : JapanFlag
                }
              />
            </AreaCountryFlag>
            <AreaCountryFlag
              onPress={flag => functionOnPressFlag('ch')}
              disabled={nameDrinkHant === null && instructionsHant === null}>
              <Photo
                source={
                  nameDrinkHant === null && instructionsHant === null
                    ? ChinaFlagOff
                    : ChinaFlag
                }
              />
            </AreaCountryFlag>
          </AreaCountry>
          <AreaText>
            <Title>{nameAlternative || nameDrink}</Title>
            <AreaDescription>
              <Text>{instructions}</Text>
            </AreaDescription>
          </AreaText>
        </AreaInfo>
      </AreaImageInfo>
      <Ingredients>
        <List
          data={ingredients}
          ListHeaderComponent={({item, index}) => (
            <AreaTextIngredients>
              <AreaTextProductIngredient>
                <Text bold>Produto</Text>
              </AreaTextProductIngredient>
              <AreaTextAmountIngredient>
                <Text bold>Quantidade</Text>
              </AreaTextAmountIngredient>
            </AreaTextIngredients>
          )}
          renderItem={({item, index}) => (
            <AreaTextIngredients color={index % 2 === 0}>
              <AreaTextProductIngredient>
                <Text>{item.strIngredient}</Text>
              </AreaTextProductIngredient>
              <AreaTextAmountIngredient>
                <Text>{item.strMeasure}</Text>
              </AreaTextAmountIngredient>
            </AreaTextIngredients>
          )}
          keyExtractor={({item}, index) => index.toString()}
        />
        <Title>Caracteristicas</Title>
        <AreaTextCaracteristic>
          <AreaTextProductIngredient>
            <Text bold>Alcolico</Text>
          </AreaTextProductIngredient>
          <AreaTextAmountIngredient>
            <Text bold style={{textAlign: 'center'}}>
              {alchoolic.toLowerCase() === 'alcoholic' ? 'sim' : 'não'}
            </Text>
          </AreaTextAmountIngredient>
        </AreaTextCaracteristic>
        <AreaTextCaracteristic>
          <AreaTextProductIngredient>
            <Text bold>Copo</Text>
          </AreaTextProductIngredient>
          <AreaTextAmountIngredient>
            <Text bold>{glass}</Text>
          </AreaTextAmountIngredient>
        </AreaTextCaracteristic>
        <AreaTextCaracteristic>
          <AreaTextProductIngredient>
            <Text bold>Categoria</Text>
          </AreaTextProductIngredient>
          <AreaTextAmountIngredient>
            <Text bold>{category}</Text>
          </AreaTextAmountIngredient>
        </AreaTextCaracteristic>
      </Ingredients>
      <BarInfo>
        <IconArea>
          {video ? <Icon name="youtube" color="#361042" /> : <></>}
        </IconArea>
        <AreaModify>
          {tags.map((item, index) => (
            <Tags
              key={item.toString()}
              color={colors[index]}
              style={{textAlign: 'center'}}>
              {item}
            </Tags>
          ))}
        </AreaModify>
        <AreaModify>
          <Text style={{textAlign: 'center'}}>Modificado</Text>
          <Text style={{textAlign: 'center'}}>{modified.substring(0, 10)}</Text>
        </AreaModify>
      </BarInfo>
    </Container>
  );
}
ModalInfo.propTypes = {
  nameDrink: PropTypes.string,
  nameAlternative: PropTypes.string,
  nameDrinkES: PropTypes.string,
  nameDrinkDE: PropTypes.string,
  nameDrinkFR: PropTypes.string,
  nameDrinkHanz: PropTypes.string,
  nameDrinkHant: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  video: PropTypes.string,
  category: PropTypes.string,
  IBA: PropTypes.string,
  alchoolic: PropTypes.string,
  glass: PropTypes.string,
  instructions: PropTypes.string,
  instructionsES: PropTypes.string,
  instructionsDE: PropTypes.string,
  instructionsFR: PropTypes.string,
  instructionsHanz: PropTypes.string,
  instructionsHant: PropTypes.string,
  photo: PropTypes.string,
  creativeConformodit: PropTypes.string,
  modified: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  functionOnPressFlag: PropTypes.func,
};
ModalInfo.defaultProps = {
  photo: 'https://facebook.github.io/react-native/img/tiny_logo.png',
  functionOnPressFlag: () => {},
  nameDrink: 'name drink',
  nameAlternative: 'name alternative',
  nameDrinkES: 'name drink es',
  nameDrinkDE: 'name drink de',
  nameDrinkFR: 'name drink fr',
  nameDrinkHanz: 'name drink jp',
  nameDrinkHant: 'name drink hk',
  tags: [''],
  video: 'video',
  category: 'category',
  IBA: 'IBA',
  alchoolic: 'Alchoolic',
  glass: 'glass',
  instructions: 'instructions',
  instructionsES: 'isntruction es',
  instructionsDE: 'instruction de',
  instructionsFR: 'instruction fr',
  instructionsHanz: 'intruction jp',
  instructionsHant: 'instruction ch',
  creativeConformodit: 'creative',
  modified: 'modificar',
  ingredients: [],
};
