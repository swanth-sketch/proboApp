import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const TrendingNow = (data: any) => {
  return (
    <View style={styles.trendingCard}>
      <Image source={{ uri: data?.data?.image }} style={styles.image} />
      <Text>{data?.data?.name}</Text>
    </View>
  );
};

export const NewLabelTrending = (TrendingNow: any) => {
  return (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.newLabelContainer}>
          <Text style={styles.newLabel}>New</Text>
        </View>
        <TrendingNow {...props} />
      </View>
    );
  };
};

export default TrendingNow;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: 25,
    height: 25,
  },
  trendingCard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    minWidth: 110,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    margin: 10,
  },
  newLabelContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  newLabel: {
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: "white",
    fontSize: 8,
    textAlign: "center",
  },
});
