import styled from 'styled-components/native';

export const Container = styled.View`


  border-radius: 25px;
  align-self: center;
  /* overflow: hidden; */
  margin: 15px 0;
  /* background-color: red; */
  justify-content: center;

`;

export const TextBackground = styled.View`

  z-index: 5;

  height: auto;
  padding: 10px;
   
  /* position: absolute; */

  background-color: rgba(0, 0, 0, .45);
  border-radius: 15px;

  /* align-items: center; */
  /* top: 50%; */
  /* left: 50%; */
  align-self: center;


`;
export const Content = styled.Text`
  color: white;

  font-family: 'Lato_400Regular';
  font-size: 18px; 

`;
export const BackgroundImage = styled.Image`
  border-radius: 25px;
  /* height: 350px; */

`; 