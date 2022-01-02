import React from 'react';

import {View, Stylesheet, Text, TouchableOpacity, Image} from 'react-native';

import {FONT, COLORS, FONTS} from '../constants';

const MainLayout = ({children}) => {
  return <View style={{flex: 1}}>{children}</View>;
};

export default MainLayout;
