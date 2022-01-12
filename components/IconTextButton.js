import React from 'react';
import {View, Stylesheet, Text, TouchableOpacity, Image} from 'react-native';

import {FONT, COLORS, FONTS, SIZES} from '../constants';

const IconTextButton = ({label, icon, containerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
      <Text style={{marginLeft: SIZES.base, ...FONTS.h3}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
