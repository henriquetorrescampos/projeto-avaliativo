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
    marginVertical: 20,
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
    marginVertical: 10,
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
  containerSpace: {
    marginTop: 10,
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
    marginVertical: 20,
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
});
