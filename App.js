import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import  CatComponent from './components/CatComponent';
export default function App() {
  return (
    <View style={styles.container}>
      <CatComponent />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
