import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getHoldings, getCoinMarket} from '../stores/Market/marketActions';
import {useFocusEffect} from '@react-navigation/native';
import {SIZES, COLORS, FONTS, dummyData, icons} from '../constants';

import {MainLayout} from '.';

const Home = ({getHoldings, getCoinMarket, myHoldings, coins}) => {
  useFocusEffect(
    useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
    }, []),
  );

  function renderWalletInfoSection() {
    return [
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderTopLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}></View>,
    ];
  }

  return (
    <MainLayout>
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        {/* Header wallet info */}

        {/* Chart */}
        {/* top crryptocurrency */}
      </View>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkLine,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkLine,
          priceChangePerc,
          perPage,
          page,
        ),
      );
    },
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkLine,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkLine,
          priceChangePerc,
          perPage,
          page,
        ),
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
