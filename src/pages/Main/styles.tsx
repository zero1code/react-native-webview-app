import styled, { css } from 'styled-components/native'

export const Container = styled.View`
flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #444;
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Loading = styled.ActivityIndicator`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  align-items: center;
  justify-content: center;
`;