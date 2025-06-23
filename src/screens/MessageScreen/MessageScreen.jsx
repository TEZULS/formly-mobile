import { View, Text} from "react-native"
import { styles } from "./MessageScreen.styles"

const MessageScreen = () => {

  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Mes Messages</Text>
          </View>
    </View>
  )
}

export default MessageScreen
