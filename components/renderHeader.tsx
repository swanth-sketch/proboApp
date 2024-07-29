import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import dummyData from "../components/dummyData";
import Header from "./header";

const RenderHeader = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        {dummyData.slice(0, 3).map((data, index) => (
          <Header key={index} data={data} />
        ))}
        <TouchableOpacity onPress={toggleShowMore} style={styles.itemContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJlZCaEZedp1xFHs8F58ibQNTXWavKJTM9g&s",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>
            {showMore ? "Show less" : "Show more"}
          </Text>
        </TouchableOpacity>
      </View>
      {showMore && (
        <View style={styles.additionalContent}>
          {dummyData.slice(3).map((data, index) => (
            <Header key={index + 3} data={data} />
          ))}
        </View>
      )}
    </View>
  );
};

export default RenderHeader;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
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
  text: {
    fontSize: 10,
    // fontWeight: "600",
  },
  additionalContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    paddingTop: 0,
    paddingLeft: 0,
    borderRadius: 10,
  },
});
