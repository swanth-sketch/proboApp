import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const ReadMoreDetailsPage = (data: any) => {
  const [activeTab, setActiveTab] = useState("stats");
  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text style={styles.button}>Bitcoin daily</Text>
        </TouchableOpacity>
        <View style={styles.imageQuestionContainer}>
          <Text style={styles.questionText}>{data?.props?.data?.question}</Text>
          <Image
            source={{
              uri: data?.props?.data?.imageUrl,
            }}
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.description}>{data?.props?.data?.description}</Text>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={
              activeTab === "stats" ? styles.activeTab : styles.inActiveTab
            }
            onPress={() => {
              setActiveTab("stats");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 8,
                fontWeight: activeTab === "stats" && "bold",
              }}
            >
              Stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeTab === "rules" ? styles.activeTab : styles.inActiveTab
            }
            onPress={() => {
              setActiveTab("rules");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: activeTab === "rules" && "bold",
              }}
            >
              Rules
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {activeTab && (
        <View style={styles.activeTabContentContainer}>
          <Text style={styles.statsContent}>
            Dive deep into the color pewter. Find color palettes, get the codes
            for adding ’em to your designs—explore your color-dreaming heart
            out.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ReadMoreDetailsPage;

const styles = StyleSheet.create({
  detailsContainer: {
    width: "100%",
    paddingBottom: 100,
  },
  questionText: {
    fontWeight: "bold",
    maxWidth: 300,
  },
  description: {
    marginBottom: 20,
    fontSize: 10,
    fontWeight: "light",
  },
  content: {
    padding: 20,
  },
  button: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 3,
    marginBottom: 30,
  },
  statsContent: {
    borderWidth: 1,
    borderColor: "#E9EAEC",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  activeTabContentContainer: {
    marginLeft: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  inActiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#E9EAEC",
    flex: 1,
  },
  imageQuestionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    flex: 1,
  },
});
