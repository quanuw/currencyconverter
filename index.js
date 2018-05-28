import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

EStyleSheet.build ({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#F0F0F0',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const App = () => (
//   <View style={styles.container}>
//     <Text>A Currency Converter built with React Native</Text>
//   </View>
// );

export default () => <Home />;
// export default App;
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>A Currency Converter built with React Native</Text>
//       </View>
//     );
//   }
// }

