import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
    alignContent: "center",

    backgroundColor: "#2bb062",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  textName: {
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});
