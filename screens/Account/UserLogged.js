import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { closeSession } from "../../services/firebaseAction";

const UserLogged = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Cerrar Session"
        onPress={() => {
          closeSession();
          navigation.navigate("restautants");
        }}
      />
    </View>
  );
};

export default UserLogged;

const styles = StyleSheet.create({});
