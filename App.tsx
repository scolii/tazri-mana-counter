import React from 'react';
import { View, StyleSheet } from 'react-native';

import CounterBox from './components/CounterBox';
const black_mana_symbol = require('./images/black-mana-symbol.png');

function App() {
  return (
    <View style={styles.appContainer}>
      <CounterBox imageUrl={black_mana_symbol} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
