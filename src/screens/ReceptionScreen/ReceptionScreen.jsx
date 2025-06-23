import { View, ScrollView, FlatList } from "react-native"
import Header from "../../components/Header/Header"
import TopTabBar from "../../components/TopTabBar/TopTabBar"
import CourseCard from "../../components/CourseCard/CourseCard"
import { courses } from "../../data/coursesData"
import { styles } from "./ReceptionScreen.styles"

const ReceptionScreen = ({ activeTopTab, setActiveTopTab }) => {
  const renderCourseCard = ({ item }) => <CourseCard course={item} />

  return (
    <View style={styles.container}>
      <Header />

      <TopTabBar activeTab={activeTopTab} setActiveTab={setActiveTopTab} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <FlatList
          data={courses}
          renderItem={renderCourseCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false} 
        />
      </ScrollView>
    </View>
  )
}

export default ReceptionScreen