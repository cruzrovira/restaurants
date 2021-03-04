import React from "react";

import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "./../../components/account/LoginForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Login = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/restaurant-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <LoginForm />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
    </KeyboardAwareScrollView>
  );
};

function CreateAccount(arg) {
  const navigate = useNavigation();
  return (
    <Text
      style={styles.reguister}
      onPress={() => {
        navigate.navigate("register");
      }}
    >
      Aún no tienes una cuenta?{" "}
      <Text style={styles.btnRegister}>Registrate</Text>
    </Text>
  );
}

export default Login;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#ccc",
    margin: 40,
  },
  container: {
    marginHorizontal: 40,
  },
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  reguister: {
    marginTop: 15,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  btnRegister: {
    fontWeight: "bold",
    color: "#2089DC",
  },
});
