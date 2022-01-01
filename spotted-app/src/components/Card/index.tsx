import React from 'react';
// import { translate } from 'react-native'
import { Container, TextBackground, Content, BackgroundImage } from './styles';

import {formatRelative} from 'date-fns'

import pt from 'date-fns/locale/pt';

import { View, Text, ImageBackground} from 'react-native';

export interface CardProps {
  content: string; 
  date_created: string;
  image_url: string;
}

const Card: React.FC<CardProps> = ({date_created, content, image_url}) => {



  return (
    <Container>
      <View style={{borderRadius: 25}} >
        <ImageBackground source={{uri: image_url}} style={{width: 350, height: 350, justifyContent: 'center'}} imageStyle={{borderRadius: 25}}>
          <TextBackground>
            <Content>
              {content}
            </Content>
          </TextBackground>
        </ImageBackground>

        <Text
          style={{
            width: 350,
            alignSelf: 'center', 
            fontFamily: 'Lato_400Regular',
            marginTop: 10,
            fontSize: 14
          }}
        >{formatRelative(new Date(date_created), new Date(), { locale: pt })}</Text>
      </View>

    </Container>
  );
}

export default Card;