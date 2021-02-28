import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

const RegisterForm = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const [securePasswordConfirm, setSecurePasswordConfirm] = useState(true);
  const [user, setUser] = useState({ email: "", password: "", confirm: "" });

  return (
    <View style={styles.form}>
      <Input
        placeholder="Ingresa tu emial.."
        keyboardType="email-address"
        containerStyle={styles.input}
        onChangeText={(text) => {
          setUser({ ...user, email: text });
        }}
      />
      <Input
        placeholder="Ingresa Contraseña"
        secureTextEntry={securePassword}
        containerStyle={styles.input}
        onChangeText={(text) => {
          setUser({ ...user, password: text });
        }}
        rightIcon={
          <Icon
            type="material-community"
            name={securePassword ? "eye-outline" : "eye-off-outline"}
            // size={22}
            color={"#CCC"}
            onPress={() => setSecurePassword(!securePassword)}
          />
        }

        // password={true}
      />
      <Input
        placeholder="Confrima la Contaseña"
        secureTextEntry={securePasswordConfirm}
        containerStyle={styles.input}
        onChangeText={(text) => {
          setUser({ ...user, confirm: text });
        }}
        rightIcon={
          <Icon
            type="material-community"
            name={securePasswordConfirm ? "eye-outline" : "eye-off-outline"}
            color={"#CCC"}
            onPress={() => setSecurePasswordConfirm(!securePasswordConfirm)}
          />
        }
      />
      <Button
        title="Registar Nuevo Usuario"
        type="solid"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => {
          console.log(user);
        }}
      />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  input: {
    width: "100%",
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#2089DC",
  },
});
