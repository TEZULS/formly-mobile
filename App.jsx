import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import MainNavigator from './src/navigation/MainNavigator/MainNavigator'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <MainNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App