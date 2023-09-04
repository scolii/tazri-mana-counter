import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const white_mana_symbol = require('../images/white-mana-symbol.png')
const blue_mana_symbol = require('../images/blue-mana-symbol.png')
const black_mana_symbol = require('../images/black-mana-symbol.png')
const red_mana_symbol = require('../images/red-mana-symbol.png')
const green_mana_symbol = require('../images/green-mana-symbol.png')
const tazri = require('../images/tazri-stalwart-survivor.png')

const CounterBox = ({ imageUrl }) => {
  const [manaCounter, setManaCounter] = useState(0);

  const handleIncrement = () => {
    setManaCounter(manaCounter + 1);
  };

  const handleDecrement = () => {
    setManaCounter(manaCounter - 1);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={tazri} style={styles.image2} />
      </View>

      <View style={styles.box1}>
        <Image source={white_mana_symbol} style={styles.image} />
      </View>

      <View style={styles.box2}>
        <Image source={blue_mana_symbol} style={styles.image} />
      </View>

      <View style={styles.box3}>
        <Image source={black_mana_symbol} style={styles.image} />
      </View>

      <View style={styles.box4}>
        <Image source={red_mana_symbol} style={styles.image} />
      </View>

      <View style={styles.box5}>
        <Image source={green_mana_symbol} style={styles.image} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '33.3%',
  },
  header: {
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    backgroundColor: 'black',
    width: '99%',
    height: '25%',
  },
  box1: {
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    backgroundColor: 'grey',
    width: '99%',
    height: '15%',
  },
  box2: {
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    backgroundColor: 'blue',
    width: '99%',
    height: '15%',
  },
  box3: {
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    backgroundColor: 'black',
    width: '99%',
    height: '15%',
  },
  box4: {
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    backgroundColor: 'red',
    width: '99%',
    height: '15%',
  },
  box5: {
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    backgroundColor: 'green',
    width: '99%',
    height: '15%',
  },
  image: {
    width: '110%',
    height: '110%',
  },
  image2: {
    top: 73,
    width:'238%',
    height: '238%',
  }
});

export default CounterBox;
