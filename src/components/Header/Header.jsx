import { View, Text, TextInput, Image, StyleSheet } from "react-native"
import { styles } from "./Header.styles"

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
         <Image source={ require('../../assets/search.png') } style={ styles.searchIcon }/>
        <TextInput style={styles.searchInput} placeholder="Research" placeholderTextColor="#999" />
      </View>
      <View style={styles.rightSection}>
        <View style={styles.coinContainer}>
          <Image source={ require('../../assets/logo.png') } style={ styles.coinIcon }/>
          <Text style={styles.coinCount}> 200</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
