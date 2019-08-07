import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Input,
  Button,
} from 'react-native-elements';

class AddClassPage extends Component {
  render() {
    return (
      <View>
        <Text>Current Classes</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <View style={{ flexDirection: 'row', backgroundColor: 'blue' }}>
          <View style={{ flex: 1 }}>
            <Text>Classes Column</Text>
          </View>
          <View style={{ flex: 1, borderLeftColor: 'red', borderLeftWidth: 1 }}>
            <Text>Students Column</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default AddClassPage;