import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import { RouteProp, useNavigation, useRoute} from '@react-navigation/native'; 

import { 
  Container,
  Header,
  ArrowBackButton,
  BrandTitle,
  Title,
  TextContainer,
  Subtitle,
  TextArea,
  Button, 
  ButtonText,
  BrandContainer
} from './styles';

import { Feather } from '@expo/vector-icons'; 

import api from '../../services/api';

import { Socket,  } from 'socket.io-client'
import { useAppContext } from '../../contexts/app.context';

type CreateSpottedParams = {
  socket: Socket
}

const CreateSpotted: React.FC = () => {

  const {socket} = useAppContext()

  const [spottedContent, setSpottedContent] = useState('');
  const [showWarningModal, setShowWarningModal] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleCloseWarningModal() {
    setShowWarningModal(false);
  }

  function handleOpenWarningModal() {

    if (spottedContent.length == 0) {
      
      alert('spotted sem conteúdo');
      return 
    }


    Alert.alert('Atenção', 'Tem certeza que deseja enviar esse spotted?', [
      {
        onPress: () => {},
        text: 'cancelar', 
        style: 'cancel'
      },
      {
        onPress: handleSendSpottedContent,
        text: 'enviar',
        style: 'default'
      },
    ], {
      cancelable: true,
      onDismiss: () => {}
    })
  }

  function handleUpdateTextArea(text: string) {
    setSpottedContent(text);
  }

  async function handleSendSpottedContent() {
    try {
      // route.params.socket.emit('create_spotted', {content: spottedContent})

      socket.emit('create_spotted', {content: spottedContent})

      navigation.goBack();
    } catch(err) {
      alert(err);
      console.log(err);
    }
  }

  return (
    <Container>
      <Header>
        <ArrowBackButton
          onPress={handleGoBack}
        >
          <Feather name="arrow-left" size={28} color="black" />
        </ArrowBackButton>
        <BrandContainer>
          <BrandTitle>
            Criar Spotted
          </BrandTitle>
        </BrandContainer>

      </Header>

      <TextContainer>
        <Title>
          Aqui você pode escrever o seu spotted.
        </Title>
        <Subtitle>
          Os spotteds são completamente anônimos
        </Subtitle>
      </TextContainer>

      <TextArea
        multiline
        numberOfLines={10}
        style={{
          textAlignVertical: 'top'
        }}
        onChangeText={handleUpdateTextArea}
        placeholder="escreve aquela mensagem marota para o(a) crush..."
      ></TextArea>
      <Button
  
      >
        <ButtonText onPress={handleOpenWarningModal}>
          Enviar Spotted
        </ButtonText>
      </Button>

    </Container>
  );
}

export default CreateSpotted;