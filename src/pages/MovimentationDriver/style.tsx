import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  button: {
    backgroundColor: "#28B360",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  movementCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  movementText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  observationText: {
    color: "#4A4A4A",
    fontSize: 14,
    fontStyle: "italic",
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#Fff",
    borderRadius: 20,
    marginBottom: 20,
    position: "relative",
  },
  logoutButtonText: {
    color: "#dc506c",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
