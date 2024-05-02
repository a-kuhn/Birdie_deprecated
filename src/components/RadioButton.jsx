import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default RadioButton = ({key, radioText, selected, onClick}) => {
  const [selectedRadio, setSelectedRadio] = useState(selected);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selected ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>{radioText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 24,
    fontWeight: 'heavy',
    color: 'purple',
  },
  radio: {
    width: 25,
    height: 25,
    borderColor: 'purple',
    borderRadius: 20,
    borderWidth: 2,
    margin: 8,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    width: 16,
    height: 16,
    backgroundColor: 'purple',
    borderRadius: 20,
    margin: 2.2,
  },
});
