import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #361042;
  padding: 10px;
`;
export const Loading = styled.ActivityIndicator.attrs(props => {
  return {
    size: props.size,
    color: props.color,
  };
})`
  flex: 1;
`;
