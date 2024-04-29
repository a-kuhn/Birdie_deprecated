import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '@components/Button';
import {getBirdsByFamily} from '@services/BirdsService';
import {createRandomGame} from '@services/CreateGameService';

export default CreateGameScreen = ({setGameBirds}) => {
  const getRandomBirds = count => {
    const birds = createRandomGame(count);
    setGameBirds(birds);
  };
  const createCustomGame = () => {
    console.log('custom game');
    const birds = getBirdsByFamily('accipi1');
    setGameBirds(birds);
  };

  return (
    <View style={styles.container}>
      <Button title="Random Game" onClick={() => getRandomBirds(25)} />
      <Button title="Custom Game" onClick={createCustomGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
