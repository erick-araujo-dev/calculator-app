import { StyleSheet, SafeAreaView } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
