import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: "90%",
    height: 240,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 6,
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  productName: {
    fontWeight: "bold",
    marginVertical: 5,
    alignSelf: "center",
    fontSize: 20,
  },
  containerText: {
    marginVertical: 10,
    marginHorizontal: 10,
    gap: 7,
  },
  textInput: {
    backgroundColor: "#FFFF",
    borderColor: "#000",
    borderRadius: 5,
    height: 40,
    padding: 5,
    fontSize: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 8,
  },
  branchName: {
    fontSize: 18,
  },
});
