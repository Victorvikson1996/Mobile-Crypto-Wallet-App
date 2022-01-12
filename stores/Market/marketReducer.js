import * as marketActions from './marketActions';

const initialState = {
  myHolding: [],
  coins: [],
  error: null,
  loading: false,
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case marketActions.GET_HOLDINGS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case marketActions.GET_HOLDINGS_SUCCESS:
      return {
        ...state,
        myHolding: action.payload.myHoldings,
      };
    case marketActions.GET_HOLDINGS_FALUIRE:
      return {
        ...state,
        error: action.payload.error,
      };
    case marketActions.GET_COIN_MARKET_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case marketActions.GET_COIN_MARKET_SUCCESS:
      return {
        ...state,
        coins: action.payload.coins,
      };

    case marketActions.GET_COIN_MARKET_FALUIRE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default marketReducer;
