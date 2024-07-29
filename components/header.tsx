import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = (data: any) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: data?.data?.image,
        }}
        style={styles.image}
      ></Image>
      <Text style={styles.nameContainer}>{data?.data?.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    height: 80,
    width: 90,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 6,
    gap: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  nameContainer: {
    fontSize: 10,
    // fontWeight: 600,
  },
});
