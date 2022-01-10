import {Dispatch} from '@reduxjs/toolkit';
import store from '../store';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const ADD_CODE = 'ADD_CODE';
// export const vI = 'ADD_CODE';
export const ShowCart = (item: any) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_CODE,
    payload: item,
  });
};

export const AddToList = (item: any) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TO_LIST,
    payload: item,
  });
};
