import React, {useState, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default FlashCard = ({bird}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [bird]);

  const handlePress = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {isFlipped ? (
        <View style={styles.cardBack}>
          <Text style={styles.cardTitle}>{bird.famComName}</Text>
          {bird.imageUrl && bird.imageUrl !== '' ? (
            <Image source={{uri: bird.imageUrl}} style={styles.smallImage} />
          ) : //todo - add a placeholder image; log error if image not found (use onError prop on Image component)
          null}
          <Text style={styles.commonName}>{bird.comName}</Text>
          <Text style={styles.latinName}>{bird.sciName}</Text>
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
    borderRadius: 20,
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
