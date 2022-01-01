import React, {useState} from 'react';
import api from '../../services/api'; 
import { FlatList, RefreshControl } from 'react-native';

import { Container, Header, CreateSpottedButton, HeaderImage, TitleBrand, SearchInput } from './styles';

import { Feather } from '@expo/vector-icons'; 

import Constants from 'expo-constants'

import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { useAppContext, Spotted } from '../../contexts/app.context';

import {formatRelative} from 'date-fns'

import pt from 'date-fns/locale/pt';


const Main: React.FC = () => {

  const navigation = useNavigation();

  // const [spotteds, setSpotteds ] = useState<Spotted[]>([] as Spotted[]); 
  const {spotteds, setFilteredSpotteds, filteredSpotteds, setSpotteds} = useAppContext();

 
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = React.useCallback(async () => {
    setRefreshing(true);

    const response = await api.get('/spotteds'); 

    setSpotteds(response.data.reverse());
    setFilteredSpotteds(response.data);

    setRefreshing(false);

  }, [refreshing])
 

  function handleSearchSpotted(
    text: string,
    data: Spotted[], 
    updateData: React.Dispatch<React.SetStateAction<Spotted[]>> 
  ) {
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = data.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          // console.log(item.date_created);
          const itemData = item.content 
              ? item.content.toUpperCase() + '-' + formatRelative(new Date(item.date_created), new Date(), { locale: pt }).toUpperCase()
              : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      updateData(newData);
      setSearchQuery(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      updateData(spotteds);
      setSearchQuery(text);
    }

  }



  function handleNavigateToCreateSpotted() {
    navigation.navigate("Criar Spotted" as never); 
  }

  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
      <Header>
        <HeaderImage source={require('../../../assets/icon.png')} />
        <TitleBrand>
          Spotted
        </TitleBrand>
        <CreateSpottedButton onPress={handleNavigateToCreateSpotted}>
          <Feather name="send" size={28} color="black" />
        </CreateSpottedButton>
      </Header>

      <SearchInput 
        placeholder="Pesquisar nos spotteds..." 
        onChangeText={
            (text) => handleSearchSpotted(text, filteredSpotteds, setFilteredSpotteds)
          }
        value={searchQuery}
      />
      <FlatList 
        data={filteredSpotteds}
        renderItem={({item}) => (
          <Card
            image_url={item.image_url}
            content={item.content}
            date_created={item.date_created}
          />
        )}
        refreshControl={
        <RefreshControl
          refreshing={refreshing} 
          onRefresh={handleRefresh}
        />}
      />
    </Container>
  );
}

export default Main;