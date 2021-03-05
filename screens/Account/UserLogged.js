import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { closeSession, getCurrentUser } from "../../services/firebaseAction";

import Toast from "react-native-easy-toast";
import Loading from "./../../components/Loading";
import InfoUser from "../../components/account/InfoUser";

const UserLogged = () => {
  const toastRef = useRef();

  const [loading, setLoading] = useState(false);
  const [loadingText, setloadingText] = useState("");
  const [user, setuser] = useState(null);

  useEffect(() => {
    setuser(getCurrentUser());
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {user && <InfoUser user={user} />}
      <Text>Accoun options</Text>
      <Button
        title="Cerrar Session"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => {
          closeSession();
          navigation.navigate("restautants");
        }}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      {loading && <Loading isVisible={loading} text={loadingText} />}
    </View>
  );
};

export default UserLogged;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#f9f9f9",
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
