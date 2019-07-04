import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import R from 'ramda';
import DraggableAnimal from './DraggableAnimal';

const animals = [
  'tiger',
  'bull',
  'chick',
  'hippo',
  'crab',
  'fox',
  'hedgehog',
  'koala',
  'lemur',
  'pig',
  'whale',
  'zebra'
];

export default class Home extends Component {
  constructor() {
    super();
    this.animalsPerRow = Math.floor(Dimensions.get('window').width / 128);
    this.data = R.splitEvery(this.animalsPerRow, animals);
    this.state = {
      happyFaceDropzone: null,
      neutralFaceDropzone: null,
      sadFaceDropzone: null,
    };
  }

  setHappyFaceDropZoneValue(event) {
    this.setState({ happyFaceDropzone: event.nativeEvent.layout });
  }
  setNeutralFaceDropZoneValue(event) {
    this.setState({ neutralFaceDropzone: event.nativeEvent.layout });
  }
  setSadFaceDropZoneValue(event) {
    this.setState({ sadFaceDropzone: event.nativeEvent.layout });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Image
            style={{ height: 128, width: 128 }}
            source={require('../assets/faces/happy.png')}
            onLayout={this.setHappyFaceDropZoneValue.bind(this)}
          />
          <Image
            style={{ height: 128, width: 128 }}
            source={require('../assets/faces/surprised.png')}
            onLayout={this.setNeutralFaceDropZoneValue.bind(this)}
          />
          <Image
            style={{ height: 128, width: 128 }}
            source={require('../assets/faces/sad.png')}
            onLayout={this.setSadFaceDropZoneValue.bind(this)}
          />
        </View>
        <View style={{ flex: 1 }}>
          {
            this.data.map((groupOfAnimals, index) => (
              <View key={index} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                {groupOfAnimals.map((animal) => (
                  <DraggableAnimal
                    key={animal}
                    animal={animal}
                    happyFaceDropzone={this.state.happyFaceDropzone}
                    neutralFaceDropzone={this.state.neutralFaceDropzone}
                    sadFaceDropzone={this.state.sadFaceDropzone}
                  />
                ))}
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}
