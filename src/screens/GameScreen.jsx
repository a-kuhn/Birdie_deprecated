import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import FlashCard from '@components/FlashCard';
import Button from '@components/Button';

export default GameScreen = ({birds}) => {
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);

  const handlePrevBird = () => {
    setCurrentBirdIndex(
      prevIndex => (prevIndex + birds.length - 1) % birds.length,
    );
  };
  const handleNextBird = () => {
    setCurrentBirdIndex(prevIndex => (prevIndex + 1) % birds.length);
  };
  const handleRestartGame = () => {
    setCurrentBirdIndex(0);
  };
  const handleEndGame = () => {
    console.log('Game Ended');
  };

  return (
    <View style={styles.container}>
      <FlashCard bird={birds[currentBirdIndex]} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button title="Prev Bird" onClick={handlePrevBird} />
        <Button title="Next Bird" onClick={handleNextBird} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button title="Restart Game" onClick={handleRestartGame} />
        <Button title="End Game" onClick={handleEndGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
