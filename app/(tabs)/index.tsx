import { Image, StyleSheet, SafeAreaView } from "react-native";
import QuestionCard from "@/components/QuestionCard";
import RenderHeader from "@/components/renderHeader";
import RenderTrendingNow from "@/components/renderTrendingNow";
import RenderQuestionCards from "@/components/renderQuestionCards";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RenderHeader />
      <RenderTrendingNow />
      <RenderQuestionCards />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
