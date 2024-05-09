import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Button from '@components/Button';
import RadioButton from '@components/RadioButton';
import Dropdown from '@components/Dropdown';
import allCountries from '@assets/data/AllCountries.json';
import axios from 'axios';
import {getUniqueFamilies} from '@services/BirdsService';
import {createGame} from '@services/CreateGameService';

export default CreateGameScreen = ({setGameBirds}) => {
  const birdNumberOpts = ['25', '50', 'all'];
  const [birdsNumber, setBirdsNumber] = useState('25');
  const uniqueFamilies = getUniqueFamilies();
  const [selectedFamily, setSelectedFamily] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [allSubnational1, setAllSubnational1] = useState([]);
  const [selectedStateProvince, setSelectedStateProvince] = useState('');
  const [allSubnational2, setAllSubnational2] = useState([]);
  const [selectedCountyRegion, setSelectedCountyRegion] = useState('');

  const EBIRD_API_KEY = process.env.EBIRD_API_KEY;
  const eBirdApi = axios.create({
    baseURL: 'https://api.ebird.org/v2',
    headers: {
      'X-eBirdApiToken': EBIRD_API_KEY,
    },
  });
  const subNational1Url = `/ref/region/list/subnational1/${selectedCountry}`;
  const subNational2Url = `/ref/region/list/subnational2/${selectedStateProvince}`;

  useEffect(() => {
    eBirdApi
      .get(subNational1Url)
      .then(res => {
        setAllSubnational1(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    setSelectedCountyRegion('');
    setAllSubnational2([]);
  }, [selectedCountry]);

  useEffect(() => {
    eBirdApi
      .get(subNational2Url)
      .then(res => {
        setAllSubnational2(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [selectedStateProvince]);

  const handleCreateGame = () => {
    const filtersToApply = {
      birdsNumber,
      selectedFamily,
      selectedCountry,
      selectedStateProvince,
      selectedCountyRegion,
    };
    const gameBirds = createGame(filtersToApply);
    console.log(filtersToApply);
    setGameBirds(gameBirds);
    console.log('Game birds!');
    gameBirds.forEach(bird => {
      console.log(bird.comName);
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: 'purple',
          paddingVertical: 5,
        }}>
        Create New Game
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'purple'}} />
        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: 4,
            color: 'purple',
          }}>
          Number of flashcards
        </Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'purple'}} />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'purple'}} />
        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: 4,
            color: 'purple',
          }}>
          Family (optional)
        </Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'purple'}} />
      </View>
      <Dropdown
        dropdownLabel={'Family'}
        dropdownData={uniqueFamilies}
        labelField={'famComName'}
        valueField={'famComNameCode'}
        placeholder={'Select a family'}
        selectedValue={selectedFamily}
        onSelect={item => {
          setSelectedFamily(item.famComNameCode);
        }}
      />
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'purple'}} />
        <View>
          <Text
            style={{
              textAlign: 'center',
              paddingHorizontal: 4,
              color: 'purple',
            }}>
            Location (optional)
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'purple'}} />
      </View>
      <Dropdown
        dropdownLabel={'Country'}
        dropdownData={allCountries}
        labelField={'name'}
        valueField={'code'}
        placeholder={'Select a country'}
        selectedValue={selectedCountry}
        onSelect={item => {
          setSelectedCountry(item.code);
        }}
      />
      {selectedCountry && allSubnational1.length > 0 && (
        <Dropdown
          dropdownLabel={'State/Province'}
          dropdownData={allSubnational1}
          labelField={'name'}
          valueField={'code'}
          placeholder={'Select a state/province'}
          selectedValue={selectedStateProvince}
          onSelect={item => {
            setSelectedStateProvince(item.code);
          }}
        />
      )}
      {selectedStateProvince && allSubnational2.length > 0 && (
        <Dropdown
          dropdownLabel={'County/Region'}
          dropdownData={allSubnational2}
          labelField={'name'}
          valueField={'code'}
          placeholder={'Select a county/region'}
          selectedValue={selectedCountyRegion}
          onSelect={item => {
            setSelectedCountyRegion(item.code);
          }}
        />
      )}
      <Button title="create game" onClick={handleCreateGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});
