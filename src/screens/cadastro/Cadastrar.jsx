import React, { useState } from 'react';
import { View } from 'react-native';
import CustomTextInput from '../../components/textInput/CustomTextInput';
import Button from '../../components/button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ApiService from '../../servicesApi/ApiService';
import { useNavigation } from '@react-navigation/native';
import CustomTextErro from '../../components/customTextErro/CustomTextErro';

const Cadastrar = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleCadastrar = (values) => {
    cadastrarUsuario(values)
    console.log(values);
  };


  const cadastrarUsuario = async (data) => {

    setLoading(true)

    try {
      await ApiService.post('user/sign-up', data);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    nomeCompleto: Yup.string().required('Nome é obrigatório'),
    password: Yup.string().required('Password é obrigatória'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'A confirmação está diferente')
      .required('Confirm password é obrigatória'),
  });

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        nomeCompleto: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleCadastrar}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <CustomTextInput
            value={values.username}
            onChangeText={handleChange('username')}
            placeholder="Username"
          />
          {errors.username && <CustomTextErro error={errors.username} />}

          <CustomTextInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeholder="Email"
            keyboardType="email-address"
          />
          {errors.email && <CustomTextErro error={errors.email} />}

          <CustomTextInput
            value={values.nomeCompleto}
            onChangeText={handleChange('nomeCompleto')}
            placeholder="Nome Completo"
          />
          {errors.nomeCompleto && <CustomTextErro error={errors.nomeCompleto} />}

          <CustomTextInput
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="Password"
            secureTextEntry={true}
          />
          {errors.password && <CustomTextErro error={errors.password} />}

          <CustomTextInput
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          {errors.confirmPassword && (
            <CustomTextErro error={errors.confirmPassword} />
          )}

          <Button labelButton="Cadastrar" loading={loading} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default Cadastrar;
