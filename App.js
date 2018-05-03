import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

componentWillMount(){
    // Make a request for a user with a given ID
    axios.get('https://demo-profile.herokuapp.com/profile')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Expo Test App!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8ff30',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
