import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import colors from '@constants/colors';
import GameScreen from '@screens/GameScreen';
import { getAllBirds, getBirdsByFamily } from '@services/BirdsService';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const allBirds = getAllBirds();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <GameScreen birds={allBirds} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow_green,
  },
});

export default App;
