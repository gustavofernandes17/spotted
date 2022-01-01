import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F8F9FA;
  
`;

export const BrandContainer = styled.View`

  flex: 1; 
  /* align-items: center; */
  padding-left: 23%;
  /* justify-content: center; */
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 350px; 
  height: 60px;
`;
export const ArrowBackButton = styled.TouchableOpacity`


  align-items: center;
  justify-content: center;
`;
export const BrandTitle = styled.Text`
  font-family: 'Lato_700Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;
export const Title = styled.Text`
  font-family: 'Lato_700Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  margin-bottom: 16px;
`;
export const TextContainer = styled.View`
  margin: 32px 0;
  width: 350px; 
`;
export const Subtitle = styled.Text`
  font-family: 'Lato_400Regular';

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ADB5BD;
`;
export const TextArea = styled.TextInput`
  flex: 1;
  border: 1px solid #ADB5BD; 
  width: 350px;
  border-radius: 25px; 
  padding: 24px; 
  font-size: 18px;
  line-height: 22px;
`;
export const Button = styled.TouchableOpacity`
  height: 50px; 
  width: 350px;
  border-radius: 25px;
  background-color: #FE5E41;
  align-items: center;
  justify-content: center;

  margin: 32px 0; 

`; 

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  font-family: 'Lato_400Regular';

  color: #FFFFFF;
`; 