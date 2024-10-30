import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerPicker: {
    alignItems: "flex-start",
    marginHorizontal: 30,
    gap: 10,
  },
  pickerInput: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  textMovimentation: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  containerButton: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 50,
    width: 140,
    backgroundColor: "#94b9b464",
  },
  textButton: {
    color: "#151414",
    fontWeight: "bold",
    fontSize: 19,
  },
  containerTextInput: {
    width: 310,
    height: 100,
    borderWidth: 0.5,
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  textInputQtd: {
    width: 310,
    height: 45,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    marginBottom: 2,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
