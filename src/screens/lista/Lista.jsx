import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button/Button';
import DescriptionContainer from '../../components/descriptionContainer/DescriptionContainer';
import AsyncStorage from "@react-native-community/async-storage";
import ApiService from '../../servicesApi/ApiService';

const Lista = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const storagedUser = JSON.parse(await AsyncStorage.getItem("@RNAuth:user"));
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        setLoading(true);
        try {
          const response = await ApiService.get('item', storagedToken);
          setItems(response)
          console.log(response);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        navigation.navigate('Login');
      }
    };

    fetchData();
  }, []);

  const handleSairPress = () => {
    AsyncStorage.clear("@RNAuth:user");
    AsyncStorage.clear("@RNAuth:token");
    navigation.navigate('Login');

  };

  return (
    <View>
      <Button labelButton="Sair" onPress={handleSairPress} />
      {
        loading ? (
          <ActivityIndicator size="small" color="#800080" />
        ) : (
          items.map((obj) => (
            <DescriptionContainer key={obj.id} data={obj.descricao} />
          ))
        )
      }


    </View>
  );
};

export default Lista;
