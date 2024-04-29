import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '@components/Button';

const FlashCard = ({bird, onNext}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePress = () => {
    setIsFlipped(!isFlipped);
  };
  const handleNextBird = () => {
    onNext();
    setIsFlipped(false);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {isFlipped ? (
        <View style={styles.cardBack}>
          <Text style={styles.cardTitle}>{bird.famComName}</Text>
          <Image source={{uri: bird.imageUrl}} style={styles.smallImage} />
          <Text style={styles.commonName}>{bird.comName}</Text>
          <Text style={styles.latinName}>{bird.sciName}</Text>
          <Button title="Next Bird" onClick={handleNextBird} />
        </View>
      ) : (
        <Image source={{uri: bird.imageUrl}} style={styles.cardFront} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 350,
    overflow: 'hidden',
    borderRadius: 30,
    borderWidth: 2,
  },
  cardFront: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  cardBack: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
  smallImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 14,
  },
  commonName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  latinName: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default FlashCard;
