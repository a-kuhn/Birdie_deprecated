import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlashCard from '@components/FlashCard';
import Button from '@components/Button';

export default GameScreen = ({birds, setGameBirds}) => {
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
    setCurrentBirdIndex(0);
    setGameBirds([]);
  };

  return (
    <View style={styles.container}>
      {birds.length === 0 ? (
        <Text>Create a new game!</Text>
      ) : (
        <FlashCard bird={birds[currentBirdIndex]} />
      )}
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
