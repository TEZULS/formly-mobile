import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  tab: {
    alignItems: "center",
    position: "relative",
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: "contain",
  },
  tabText: {
    fontSize: 12,
    color: "#000",
  },
  activeTabText: {
    color: "#f5a623",
    fontWeight: "bold",
  },
  underline: {
    position: "absolute",
    bottom: -5,
    width: "60%",
    height: 2,
    backgroundColor: "#f5a623",
    borderRadius: 2,
  },
})
