import { View, TouchableOpacity, Text, Image } from "react-native"
import { topTabs } from "../../data/tabsData"
import { styles } from "./TopTabBar.styles"

const TopTabBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      {topTabs.map((tab) => (
        <TouchableOpacity
          key={tab.label}
          style={styles.tab}
          onPress={() => setActiveTab(tab.label)}
        >
          <Image
            source={activeTab === tab.label ? tab.activeIcon : tab.icon}
            style={styles.icon}
          />
          <Text
            style={[styles.tabText, activeTab === tab.label && styles.activeTabText]}
          >
            {tab.label}
          </Text>
          {activeTab === tab.label && <View style={styles.underline} />}
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TopTabBar