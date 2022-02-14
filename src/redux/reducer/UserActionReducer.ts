import {ADD_CODE, ADD_TO_LIST} from '../action/UserAction';
const initialValue = {
  codeList: [],
  isShowing: false,
};

export default function UserActionReducer(state = initialValue, action: any) {
  switch (action.type) {
    case ADD_CODE:
      return {
        codeList: action.payload,
        isShowing: false,
      };
    case ADD_TO_LIST:
      return {
        // codeList: action.payload,
        isShowing: true,
      };
    default:
      return state;
  }
}
