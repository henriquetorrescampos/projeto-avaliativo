import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerButton: {
    alignSelf: "flex-end",
    marginTop: 40,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#28B360",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    height: 50,
    width: 150,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  userContainer: {
    width: 147,
    height: 120,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
    justifyContent: "space-between",
  },
  switchOn: {
    backgroundColor: "#D1EFEC",
    borderColor: "#D1EFEC",
    borderWidth: 1,
  },
  switchOff: {
    backgroundColor: "#F5DADE",
    borderColor: "#F5DADE",
    borderWidth: 1,
  },
  userName: {
    alignSelf: "center",
    paddingBottom: 10,
    fontSize: 14,
    color: "#2a2a2a",
    fontWeight: "800",
  },
  switch: {
    alignSelf: "flex-end",
  },
});
