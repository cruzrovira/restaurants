import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { isUserLogged } from "./../../services/firebaseAction";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
import Loading from "./../../components/Loading";

const Account = () => {
  let [logeed, setLogeed] = useState(null);

  useEffect(() => {
    setLogeed(isUserLogged());
  }, []);

  if (logeed === null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }

  return logeed ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
