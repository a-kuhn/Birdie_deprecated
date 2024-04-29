import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import FlashCard from '@components/FlashCard';
import Button from '@components/Button';

const GameScreen = ({birds}) => {
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);

  const handleButtonClick = () => {
    setCurrentBirdIndex(prevIndex => (prevIndex + 1) % birds.length);
  };
  const handleEndGame = () => {
    console.log('Game Ended');
  };

  return (
    <View style={styles.container}>
      <FlashCard bird={birds[currentBirdIndex]} onNext={handleButtonClick} />
      <Button title="End Game" onClick={handleEndGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default GameScreen;
