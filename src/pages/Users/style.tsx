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
    backgroundColor: "#D1EFEC",
    width: 145,
    height: 120,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
    justifyContent: "space-between",
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
