import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import Button from '../../components/button/Button';
import CustomTextInput from '../../components/textInput/CustomTextInput';
import { useNavigation, } from '@react-navigation/native';
import { Formik } from 'formik';
import TextError from './../../components/textError/TextError';
import * as Yup from 'yup';
import ApiService from '../../servicesApi/ApiService';
import AsyncStorage from "@react-native-community/async-storage";
import Snackbar from './../../components/snackBar/Snackbar';



const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);


  const handleLogin = (values) => {
    logarUsuario(values)
  };


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");
      if (storagedUser && storagedToken) {
        navigation.navigate('Lista');
      }
      setGlobalLoading(false);
    }
    loadStorageData();

  })

  const handleSnackbarClose = () => {
    setSnackbarVisible(false);
  };

  const logarUsuario = async (data) => {
    setLoading(true)
    try {
      const response = await ApiService.post('login', data);
      await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.me.username));
      await AsyncStorage.setItem("@RNAuth:token", response.token);
      navigation.navigate('Lista');
    } catch (error) {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        console.error("Erro ao validar");
      } else {
        setSnackbarVisible(true);

      }

    } finally {
      setLoading(false)
    }
  };



  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username é obrigatório'),
    password: Yup.string().required('Password é obrigatória'),
  });

  const navigationToCadastrar = () => {
    navigation.navigate('Cadastrar');
  };

  return (
    <>
      {globalLoading ? (<ActivityIndicator size="small" color="#800080" />) : (
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View>
              <CustomTextInput
                value={values.username}
                onChangeText={handleChange('username')}
                placeholder="Username"
              />
              {errors.username && <TextError error={errors.username} />}

              <CustomTextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry={true}
              />
              {errors.password && <TextError error={errors.password} />}

              <Button labelButton="Entrar" loading={loading} onPress={handleSubmit} />

              <Button labelButton="Cadastrar" loading={loading} onPress={navigationToCadastrar} />
            </View>
          )}
        </Formik>)}


      {snackbarVisible && (
        <Snackbar
          message="Falha na autenticação"
          duration={3000}
          onClose={handleSnackbarClose}
          backgroundColor="red"
        />
      )}

    </>


  );
};

export default Login;
