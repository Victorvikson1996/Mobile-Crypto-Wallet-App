import React, {useRef, useEffect} from 'react';

import {
  View,
  Stylesheet,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

import {connect} from 'react-redux';

import {FONT, COLORS, FONTS, SIZES, icons} from '../constants';

import {IconTextButton} from '../components/Index';

const MainLayout = ({children, isTradeModalVisible}) => {
  const modalAnimatedvalue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedvalue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedvalue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedvalue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 350],
  });

  return (
    <View style={{flex: 1}}>
      {children}

      {/* Dim Background*/}

      {isTradeModalVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedvalue}
        />
      )}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: modalY,
          width: '100%',
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}>
        <IconTextButton
          label="Transfer"
          icon={icons.send}
          onPress={() => console.log('Transfer')}
        />
        <IconTextButton
          label="Withdraw"
          icon={icons.withdraw}
          containerStyle={{
            marginTop: SIZES.base,
          }}
          onPress={() => console.log('withdraw')}
        />
      </Animated.View>
    </View>
  );
};

// export default MainLayout;

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
