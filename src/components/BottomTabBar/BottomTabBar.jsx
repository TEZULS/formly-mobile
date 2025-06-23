import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { bottomTabs } from "../../data/tabsData";
import { styles } from "./BottomTabBar.styles";

const BottomTabBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      {bottomTabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => setActiveTab(tab.name)}
          >
            <Image
              source={tab.icon}
              style={[
                styles.tabIcon,
                isActive && styles.activeTabIcon,
              ]}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.tabText,
                isActive && styles.activeTabText,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;