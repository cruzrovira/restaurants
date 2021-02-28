import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RegisterForm from "./../../components/account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Register = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/restaurant-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <RegisterForm />
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
});
