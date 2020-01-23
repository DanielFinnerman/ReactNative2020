import React from "react";
import { View, Text, Button, AsyncStorage, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import FormTextInput from "../components/FormTextInput";
import { login } from "../hooks/APIhooks";
import useSignUpForm from "../hooks/LoginHooks";

const Login = props => {
  const {
    handleUsernameChange,
    handlePasswordChange,
    inputs
  } = useSignUpForm();
  const signInAsync = async () => {
    try {
      const user = await login(inputs);
      await AsyncStorage.setItem("userToken", user.token);
      await AsyncStorage.setItem("user", JSON.stringify(user.user));
      props.navigation.navigate("App");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
    }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40
        }}
      >
        <Text>Login</Text>
        <View>
          <FormTextInput
            autoCapitalize="none"
            placeholder="username"
            onChangeText={handleUsernameChange}
          />
          <FormTextInput
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
          <Button title="Sign in!" onPress={signInAsync} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40
        }}
      >
        <Text>Register</Text>
        <View>
          <FormTextInput
            autoCapitalize="none"
            placeholder="username"
            onChangeText={handleRegisterUsernameChange}
          />
          <FormTextInput
            autoCapitalize="none"
            placeholder="email"
            secureTextEntry={true}
            onChangeText={handleRegisterEmailChange}
          />
          <FormTextInput
            autoCapitalize="none"
            placeholder="fullname"
            secureTextEntry={true}
            onChangeText={handleRegisterFullnameChange}
          />
          <FormTextInput
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={handleRegisterPasswordChange}
          />
          <Button title="Register!" onPress={RegisterAsync} />
        </View>
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object
};

export default Login;
