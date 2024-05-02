import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Button from '@components/Button';
import RadioButton from '@components/RadioButton';
import {createRandomGame, createCustomGame} from '@services/CreateGameService';

export default CreateGameScreen = ({setGameBirds}) => {
  const birdNumberOpts = ['25', '50', 'all'];
  const [birdsNumber, setBirdsNumber] = useState('25');
  const [filtersToApply, setFiltersToApply] = useState('Hawks');

  const getRandomBirds = birdsNumber => {
    const birds = createRandomGame(birdsNumber);
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
      <View style={styles.birdsNumberRadios}>
        {birdNumberOpts.map((opt, i) => (
          <RadioButton
            key={i}
            radioText={opt}
            selected={opt === birdsNumber}
            onClick={() => {
              setBirdsNumber(opt);
            }}
          />
        ))}
      </View>
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
    // flexDirection: 'row',
    alignItems: 'flex-end',
  },
  inputText: {
    textAlign: 'left',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  radioContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
  },
  birdsNumberRadios: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
