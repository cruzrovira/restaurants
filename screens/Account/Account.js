import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCurrentUser, isUserLogged } from "./../../services/firebaseAction";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
import Loading from "./../../components/Loading";
import { useFocusEffect } from "@react-navigation/native";

const Account = () => {
  let [logeed, setLogeed] = useState(null);
  // esto sirve para que al cargar siempre la pagina verifique si esta loguiado
  useFocusEffect(
    useCallback(() => {
      let user = getCurrentUser();
      user ? setLogeed(true) : setLogeed(false);
    }, [])
  );

  if (logeed === null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }

  return logeed ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
