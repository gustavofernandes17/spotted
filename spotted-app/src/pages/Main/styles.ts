import styled from 'styled-components/native';

import Constants from 'expo-constants'


export const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #F8F9FA;
  padding: 0 24px ;
`;

export const HeaderImage = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 25px;
`; 

export const CreateSpottedButton = styled.TouchableOpacity`
`; 

export const SearchInput = styled.TextInput`

  /* height: 50px; */
  width: 350px;

  border: solid 1px #ADB5BD; 
  border-radius: 25px;

  align-self: center;

  padding: 20px;
  font-family: 'Lato_400Regular';
  
  margin-top: 24px;
  font-size: 18px;
  margin-bottom: 15px;

  &:focus-visible {
    /* border: solid 2px #ADB5BD; */
    background-color: red;
  }


`;

export const TitleBrand = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 28px;


`; 

export const Container = styled.View`
  flex: 1; 

  /* margin-top: ${Constants.statusBarHeight}px; */

  background-color: #F8F9FA;
  
`;
