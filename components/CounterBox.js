import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const CounterBox = ({ imageUrl }) => {
  const [number, setNumber] = useState(0);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const handleOrientationChange = (newDimensions) => {
    const { width, height } = newDimensions.window;
    setScreenWidth(width);
    setScreenHeight(height);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.half, styles.topHalf, { zIndex: 2 }]}
        onPress={handleIncrement}
      />
      <TouchableOpacity
        style={[styles.half, styles.bottomHalf, { zIndex: 2 }]}
        onPress={handleDecrement}
      />
      <View style={styles.backgroundImageContainer}>
        <Image source={imageUrl} style={[styles.backgroundImage, { width: screenWidth, height: screenHeight }]} />
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  half: {
    flex: 0.5,
    width: '100%',
    height: '50%',
  },
  topHalf: {
    backgroundColor: 'transparent',
  },
  bottomHalf: {
    backgroundColor: 'transparent',
  },
  numberContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Take up the full width
    height: '100%', // Take up the full height
    zIndex: 1,
  },
  number: {
    fontSize: 100,
    color: 'white',
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default CounterBox;
