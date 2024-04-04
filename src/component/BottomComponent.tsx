/* eslint-disable react-native/no-inline-styles */
import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  children: any;
  styles?: StyleProp<ViewStyle>;
}

const BottomComponent = (props: Props) => {
  const {children, styles} = props;
  return (
    <View style={[styles, {flexDirection: 'column', alignItems: 'center'}]}>
      {children}
    </View>
  );
};

export default BottomComponent;
