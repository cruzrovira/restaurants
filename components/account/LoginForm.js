import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Loading from "./../Loading";
import { isEmpty } from "lodash";
import { validateEmail } from "./../../utils/helpers";
import { loginWithEmailAndPassword } from "../../services/firebaseAction";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [securePassword, setSecurePassword] = useState(true);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loadin, setloadin] = useState(false);

  const navigation = useNavigation();

  const doLogin = async () => {
    if (!validateData()) {
      return;
    }
    setloadin(true);
    const result = await loginWithEmailAndPassword(user.email, user.password);
    if (!result.statusReponse) {
      setErrorEmail(result.error);
      setErrorPassword(result.error);
      return;
    }
    setloadin(false);
    navigation.navigate("account");
  };

  const validateData = () => {
    let isValid = true;
    setErrorEmail("");
    setErrorPassword("");

    if (!validateEmail(user.email)) {
      setErrorEmail("Debes ingresar un email  valido");
      isValid = false;
    }
    if (isEmpty(user.password)) {
      setErrorPassword("Debes ingresar una password ");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.container}>
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
      />

      <Button
        title="Iniciar Session"
        type="solid"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => {
          doLogin();
        }}
      />
      {loadin && <Loading isVisible={loadin} text="Iniciando Session..." />}
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
  },
  btnContainer: {
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#2089DC",
  },
});
