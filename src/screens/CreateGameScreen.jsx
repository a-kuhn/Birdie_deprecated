import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Button from '@components/Button';
import {getBirdsByFamily} from '@services/BirdsService';
import {createRandomGame, createCustomGame} from '@services/CreateGameService';

export default CreateGameScreen = ({setGameBirds}) => {
  const [filtersToApply, setFiltersToApply] = useState('Hawks');

  const getRandomBirds = count => {
    const birds = createRandomGame(count);
    setGameBirds(birds);
  };
  const getCustomBirds = filtersToApply => {
    console.log('custom game');
    const birds = createCustomGame(filtersToApply);
    setGameBirds(birds);
  };

  return (
    <View style={styles.container}>
      <Button title="Random Game" onClick={() => getRandomBirds(25)} />
      <TextInput
        type="text"
        placeholder="ex: 'Woodpeckers' or 'Hawks'"
        value={filtersToApply}
        autoCapitalize="none"
        onChange={e => {
          setFiltersToApply(e.nativeEvent.text);
        }}
      />
      <Button
        title="Custom Game"
        onClick={() => getCustomBirds(filtersToApply)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
