import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionProfile: {
    width: 100,
    height: 50,
    backgroundColor: "#dddcdc",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#000",
    borderRadius: 5,
    width: "100%",
    height: 40,
    marginVertical: 4,
    padding: 10,
    fontSize: 20,
  },
  containerForm: {
    marginHorizontal: 10,
  },
  containerText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  dadosLogin: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#28B360",
    width: 105,
    height: 60,
    borderRadius: 9,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  eye: {
    position: "relative",
    left: 320,
    bottom: 40,
  },
  containerPassword: {
    position: "relative",
    width: "100%",
  },
  containerSpace: {
    marginTop: 3,
  },
});
