import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { TrendingNowData } from "./dummyData";
import TrendingNow, { NewLabelTrending } from "./trendinNow";

const RenderTrendingNow = () => {
  const NewLabelTrendingComponent = NewLabelTrending(TrendingNow);

  const firstRowData = TrendingNowData.filter((_, index) => index % 2 === 0);
  const secondRowData = TrendingNowData.filter((_, index) => index % 2 !== 0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.rowsContainer}>
          <View style={styles.row}>
            {firstRowData.map((trending) =>
              trending?.isLive ? (
                <TrendingNow key={trending?.id} data={trending} />
              ) : (
                <NewLabelTrendingComponent key={trending?.id} data={trending} />
              )
            )}
          </View>
          <View style={styles.row}>
            {secondRowData.map((trending) =>
              trending?.isLive ? (
                <TrendingNow key={trending?.id} data={trending} />
              ) : (
                <NewLabelTrendingComponent key={trending?.id} data={trending} />
              )
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RenderTrendingNow;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  scrollView: {
    flexDirection: "row",
  },
  rowsContainer: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10, // Space between rows
  },
});
