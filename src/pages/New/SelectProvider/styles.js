import styled from 'styled-components';

export const Container = styled.SafeAreaView``;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollInicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled.View``;

export const Avatar = styled.View``;

export const Name = styled.View``;
