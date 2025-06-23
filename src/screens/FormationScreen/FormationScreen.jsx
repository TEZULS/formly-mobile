import { View, Text } from "react-native"
import { styles } from "./FormationScreen.styles"

const FormationScreen = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.headerTitle}>Mes Formations</Text>
      </View>
    </View>
  )
}

export default FormationScreen
