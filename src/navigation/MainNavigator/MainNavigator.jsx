import { useState } from "react"
import { View } from "react-native"
import BottomTabBar from "../../components/BottomTabBar/BottomTabBar"
import ReceptionScreen from "../../screens/ReceptionScreen/ReceptionScreen"
import MessageScreen from "../../screens/MessageScreen/MessageScreen"
import FormationScreen from "../../screens/FormationScreen/FormationScreen"
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen"
import { styles } from "./MainNavigator.styles"

const MainNavigator = () => {
  const [activeTopTab, setActiveTopTab] = useState("For you")
  const [activeBottomTab, setActiveBottomTab] = useState("Reception")

  const renderScreen = () => {
    switch (activeBottomTab) {
      case "Reception":
        return <ReceptionScreen activeTopTab={activeTopTab} setActiveTopTab={setActiveTopTab} />
      case "Message":
        return <MessageScreen />
      case "Formation":
        return <FormationScreen />
      case "Profile":
        return <ProfileScreen />
      default:
        return <ReceptionScreen activeTopTab={activeTopTab} setActiveTopTab={setActiveTopTab} />
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>{renderScreen()}</View>

      <BottomTabBar activeTab={activeBottomTab} setActiveTab={setActiveBottomTab} />
    </View>
  )
}

export default MainNavigator
