import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 60,
  },
  image: {
    alignSelf: "center",
    width: 140,
    marginTop: -55,
    height: 140,
  },
  containerTextInput: {
    alignItems: "flex-start",
    marginHorizontal: 30,
    marginTop: 30,
    gap: 2,
  },
  containerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textInput: {
    borderWidth: 0.2,
    backgroundColor: "#FFF",
    fontSize: 19,
    borderRadius: 5,
    width: "100%",
    height: 45,
    paddingHorizontal: 10,
  },
  space: {
    marginTop: 15,
  },
  button: {
    backgroundColor: "#28B360",
    alignSelf: "center",
    marginTop: 30,
    width: 90,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  eye: {
    position: "relative",
    left: 290,
    bottom: 38,
  },
  containerPassword: {
    position: "relative",
    width: "100%",
  },
});
