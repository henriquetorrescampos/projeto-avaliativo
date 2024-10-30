import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2bb062",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textName: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  containerButton: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 50,
    width: 300,
    backgroundColor: "#94b9b464",
  },
  textButton: {
    color: "#151414",
    fontWeight: "bold",
    fontSize: 19,
  },
  containerMovimentation: {
    width: 310,
    gap: 3,
    height: 210,
    paddingHorizontal: 10,
    marginBottom: 15,
    alignItems: "flex-start",
    alignSelf: "center",
    borderWidth: 0.2,
    justifyContent: "space-evenly",
  },
  titleBold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  fontSize: {
    fontSize: 18,
  },
});
