import React from "react";

import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const Login = () => {
  return (
    <ScrollView>
      <Image
        source={require("../../assets/restaurant-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <Text>Login Form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
    </ScrollView>
  );
};

function CreateAccount(arg) {
  return (
    <Text
      style={styles.reguister}
      onPress={() => {
        console.log("click");
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
    cursor: "pointer",
  },
  btnRegister: {
    fontWeight: "bold",
    color: "#2089DC",
  },
});
