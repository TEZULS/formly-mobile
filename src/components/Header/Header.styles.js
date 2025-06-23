import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: "#333",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  gridButton: {
    padding: 8,
    marginRight: 8,
  },
  gridIcon: {
    fontSize: 18,
    color: "#333",
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  coinIcon: {
    width: 24,
    height: 24,
  },
  coinCount: {
    color: "#black",
    fontWeight: "bold",
    fontSize: 14,
  },
})
