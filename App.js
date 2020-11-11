import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style = {styles.defaultCss}>
      <Text>hello4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultCss: {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
  }

});

export default App;
