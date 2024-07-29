import { ScrollView, StyleSheet, View, Text } from "react-native";
import React from "react";
import QuestionCard from "./QuestionCard";
import { QuestionsData } from "./dummyData";

const RenderQuestionCards = () => {
  return (
    <ScrollView style={styles.wholeContainer}>
      <Text style={styles.trendingNowTitle}>Trending Now</Text>
      {QuestionsData.map((question: any) => (
        <QuestionCard key={question?.id} data={question} />
      ))}
    </ScrollView>
  );
};
export default RenderQuestionCards;

const styles = StyleSheet.create({
  wholeContainer: {
    marginBottom: 10,
  },
  trendingNowTitle: {
    marginHorizontal: 20,
  },
});
