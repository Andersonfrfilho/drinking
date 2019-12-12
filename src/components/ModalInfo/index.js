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
} from './styles';
import EspanhaFlag from '../../../assets/images/espanha.png';
import FranchFlag from '../../../assets/images/franch.png';
import DeutchFlag from '../../../assets/images/deutch.png';
import JapanFlag from '../../../assets/images/japan.png';
import ChinaFlag from '../../../assets/images/china.png';

export default function ModalInfo({photo}) {
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
            <AreaCountryFlag>
              <Photo source={EspanhaFlag} />
            </AreaCountryFlag>
            <AreaCountryFlag>
              <Photo source={FranchFlag} />
            </AreaCountryFlag>
            <AreaCountryFlag>
              <Photo source={DeutchFlag} />
            </AreaCountryFlag>
            <AreaCountryFlag>
              <Photo source={JapanFlag} />
            </AreaCountryFlag>
            <AreaCountryFlag>
              <Photo source={ChinaFlag} />
            </AreaCountryFlag>
          </AreaCountry>
          <AreaText>
            <Title>Title</Title>
            <AreaDescription>
              <Text>Informacao</Text>
            </AreaDescription>
          </AreaText>
        </AreaInfo>
      </AreaImageInfo>
      <Ingredients>
        <List
          data={[1, 2, 3, 5, 6]}
          renderItem={() => (
            <AreaTextIngredients>
              <AreaTextProductIngredient>
                <Text>asdfasdf</Text>
              </AreaTextProductIngredient>
              <AreaTextAmountIngredient>
                <Text>asdfasdf</Text>
              </AreaTextAmountIngredient>
            </AreaTextIngredients>
          )}
        />
      </Ingredients>
      <BarInfo>
        <IconArea>
          <Icon name="youtube" />
        </IconArea>
        <IconArea>
          <Icon name="youtube" />
        </IconArea>
        <AreaModify>
          <Text>sdfgsdg</Text>
        </AreaModify>
      </BarInfo>
    </Container>
  );
}
ModalInfo.propTypes = {
  photo: PropTypes.string,
};
ModalInfo.defaultProps = {
  photo: 'https://facebook.github.io/react-native/img/tiny_logo.png',
};
