import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    width: 15,
    height: 15,
    color: "#333",
  },
  moreButton: {
    fontSize: 24,
    color: "#333",
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
  },
  editButtonText: {
    fontSize: 14,
    color: "#333",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  menuContainer: {
    position: "absolute",
    top: 56,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItemText: {
    fontSize: 14,
    color: "#333",
  },

  content: {
    paddingBottom: 24,
  },

  profileInfo: {
    alignItems: "center",
    paddingVertical: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  VectorImage: {
    width: 11,
    height: 11,
    resizeMode: "cover",
  },
  avatarText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    flexWrap: "wrap",
  },
  statItem: {
    alignItems: "center",
    marginVertical: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },

  achievementsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  achievementItem: {
    width: "48%",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#f8f9fa",
    marginBottom: 8,
    borderRadius: 12,
  },
  achievementIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: "contain",
  },
  achievementNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  achievementLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
  },

  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    lineHeight: 20,
  },
});