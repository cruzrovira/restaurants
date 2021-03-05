import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const InfoUser = ({ user }) => {
  const { photoURL, email, displayName } = user;

  return (
    <View style={styles.container}>
      <Avatar
        rounded={true}
        size="large"
        title="avatar "
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../assets/avatar-default.jpg")
        }
      ></Avatar>
      <View style={styles.infoUSer}>
        <Text style={styles.displayname}>
          {displayName ? displayName : "Anonimo"}
        </Text>
        <Text> {email}</Text>
      </View>
    </View>
  );
};

export default InfoUser;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    paddingVertical: 30,
  },
  infoUSer: {
    marginLeft: 20,
  },
  displayname: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
