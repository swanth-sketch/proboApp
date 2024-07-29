import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import ReadMoreDetailsPage from "./readMoreDetailsPage";

const QuestionCard = (data: any) => {
  const [openDetailsPage, setOpenDetailsPage] = useState(false);
  return (
    <View style={styles.centerContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.tradersCount}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7DWkLyAejBTw-Ue2ObAq1YvNhywbHBd79g&s",
            }}
            style={styles.userImage}
          />
          {data?.data?.traderCount} traders
        </Text>
        <View style={styles.questionContainer}>
          <Text style={styles.tradeQuestion}>{data?.data?.question}</Text>
          <Image
            source={{
              uri: data?.data?.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.tradeWholeContainer}>
          <Text style={styles.tradeInfo}>{data?.data?.description}</Text>
          <TouchableOpacity onPress={() => setOpenDetailsPage(true)}>
            <Text style={styles.buttonText}>Read more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.touchabilityButtonContainer}>
          <TouchableOpacity
            style={[styles.touchabilityWholeContainer, styles.yesButton]}
          >
            <Text style={styles.yesButtonText}>
              Yes ₹ {data?.data?.yesAmount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.touchabilityWholeContainer, styles.noButton]}
          >
            <Text style={styles.noButtonText}>No ₹ {data?.data?.noAmount}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openDetailsPage}
        onRequestClose={() => {
          setOpenDetailsPage(!openDetailsPage);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setOpenDetailsPage(!openDetailsPage)}
              style={styles.closeButtonContainer}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <ReadMoreDetailsPage props={data} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    width: "90%",
  },
  tradersCount: {
    color: "#444444",
    fontSize: 10,
    paddingBottom: 4,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tradeQuestion: {
    color: "#444444",
    fontSize: 13,
    flex: 1,
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  tradeWholeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    flexWrap: "wrap",
  },
  tradeInfo: {
    color: "#444444",
    fontSize: 10,
  },
  buttonText: {
    color: "blue",
    fontSize: 10,
    marginLeft: 5,
  },
  touchabilityButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  touchabilityWholeContainer: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  yesButton: {
    backgroundColor: "#E7F6FC",
  },
  yesButtonText: {
    color: "#0000FF",
    textAlign: "center",
    paddingVertical: 10,
  },
  noButton: {
    backgroundColor: "#F1CED4",
  },
  noButtonText: {
    color: "#BA0F30",
    textAlign: "center",
    paddingVertical: 10,
  },
  userImage: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  closeButtonContainer: {
    marginTop: 20,
  },
  closeButtonText: {
    color: "blue",
  },
});
