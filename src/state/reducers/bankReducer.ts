import { ActionType } from '../action-types';
import { Action } from '../actions/action';

const initiaState = 0;

const reducer = (state: number = initiaState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
