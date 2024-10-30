import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerButtons: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  spaceBetweenButtons: {
    marginVertical: 20,
  },
  borderButton: {
    backgroundColor: "#2bb062",
    borderRadius: 10,
    width: 300,
    height: 100,
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginLeft: 5,
    marginTop: 5,
  },
  containerTextGerenciar: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  textGerenciar: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
});
