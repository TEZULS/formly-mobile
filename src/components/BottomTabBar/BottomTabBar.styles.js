import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    color: "#f5a623",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: "#666",            
  },
  activeTabIcon: {
    tintColor: "#FF8800",        
  },
  tabText: {
    fontSize: 12,
    color: "#666",
  },
  activeTabText: {
    color: "#FF8800",
  },
});