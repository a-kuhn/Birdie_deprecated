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
    setFiltersToApply('');
  };

  return (
    <View style={styles.container}>
      <Button title="Random Game" onClick={() => getRandomBirds(25)} />
      <View style={{flexDirection: 'column'}}>
        <TextInput
          style={styles.inputText}
          type="text"
          placeholder="ex: 'Woodpeckers' or 'Hawks'"
          value={filtersToApply}
          autoCapitalize="none"
          textAlign="left"
          onChange={e => {
            setFiltersToApply(e.nativeEvent.text);
          }}
        />
        <Button
          title="Custom Game"
          onClick={() => getCustomBirds(filtersToApply)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  inputText: {
    textAlign: 'left',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
});
