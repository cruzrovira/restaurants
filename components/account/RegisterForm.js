import React, { useState } from "react";
import { size } from "lodash";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { validateEmail } from "./../../utils/helpers";

const RegisterForm = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const [securePasswordConfirm, setSecurePasswordConfirm] = useState(true);
  const [user, setUser] = useState({ email: "", password: "", confirm: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  //validate data User
  const registerUser = () => {
    if (!validateData()) {
      return;
    }
    console.log("fuck yeaaa..!!");
  };
  const validateData = () => {
    let isValid = true;
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirm("");
    if (!validateEmail(user.email)) {
      setErrorEmail("Debes ingresar un email  valido");
      isValid = false;
    }
    if (size(user.password) < 6) {
      setErrorPassword(
        "Debes ingresar una contraseña de almenos seis caracteres "
      );
      isValid = false;
    }
    if (size(user.confirm) < 6) {
      setErrorConfirm(
        "Debes ingresar una contraseña de almenos seis caracteres "
      );
      isValid = false;
    }

    if (user.password !== user.confirm) {
      setErrorPassword("La contraseña y la confirmacion no son iguales");
      setErrorConfirm("La contraseña y la confirmacion no son iguales");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.form}>
      <Input
        placeholder="Ingresa tu emial.."
        keyboardType="email-address"
        containerStyle={styles.input}
        errorMessage={errorEmail}
        defaultValue={user.email}
        onChangeText={(text) => {
          setUser({ ...user, email: text });
        }}
      />
      <Input
        placeholder="Ingresa Contraseña"
        secureTextEntry={securePassword}
        containerStyle={styles.input}
        errorMessage={errorPassword}
        defaultValue={user.password}
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
        errorMessage={errorConfirm}
        defaultValue={user.confirm}
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
          registerUser();
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
