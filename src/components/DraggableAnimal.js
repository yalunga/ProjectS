import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Image
} from 'react-native';

import * as Animals from '../assets/animals';

const insideDropzone = (gesture, dropzone) => {
  if (gesture.moveY > dropzone.y
    && gesture.moveY < dropzone.y + dropzone.height
    && gesture.moveX > dropzone.x
    && gesture.moveX < dropzone.x + dropzone.width
  ) {
    return true;
  }
  return false;
};

export default class DraggableAnimal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      isVisible: true
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropzone(gesture)) {
          this.setState({ isVisible: false });
        } else {
          Animated.spring(
            this.state.pan,
            { toValue: { x: 0, y: 0 } }
          ).start()
        }
      }
    });
  }

  isDropzone(gesture) {
    const {
      happyFaceDropzone,
      neutralFaceDropzone,
      sadFaceDropzone
    } = this.props;
    if (insideDropzone(gesture, happyFaceDropzone)) {
      return true;
    } else if (insideDropzone(gesture, neutralFaceDropzone)) {
      return true;
    } else if (insideDropzone(gesture, sadFaceDropzone)) {
      return true;
    }
    return false;
  }

  animal() {
    switch (this.props.animal) {
      case 'tiger':
        return Animals.Tiger();
      case 'bull':
        return Animals.Bull();
      case 'chick':
        return Animals.Chick();
      case 'crab':
        return Animals.Crab();
      case 'fox':
        return Animals.Fox();
      case 'hedgehog':
        return Animals.Hedgehog();
      case 'hippo':
        return Animals.Hippo();
      case 'koala':
        return Animals.Koala();
      case 'lemur':
        return Animals.Lemur();
      case 'pig':
        return Animals.Pig();
      case 'whale':
        return Animals.Whale();
      case 'zebra':
        return Animals.Zebra();
      default:
        return Animals.Tiger();
    }
  }


  render() {
    if (this.state.isVisible) {
      return (
        <Animated.View {...this.panResponder.panHandlers} style={this.state.pan.getLayout()}>
          {this.animal()}
        </Animated.View>
      )
    } else {
      return (
        <View />
      )
    }
  }
}
