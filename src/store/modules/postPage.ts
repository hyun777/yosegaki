import { createAction } from '@reduxjs/toolkit';

// Toolkit createAction test
export const CHANGE_MODE = createAction<string>('CHANGE_MODE');

// Action Types
const TOGGLE_POST_MODAL = <const>'TOGGLE_POST_MODAL';
const TOGGLE_QR_CODE = <const>'TOGGLE_QR_CODE';
const CHANGE_NAME_INPUT = <const>'CHANGE_NAME_INPUT';
const CHANGE_MESSAGE_INPUT = <const>'CHANGE_MESSAGE_INPUT';
const INITIALIZE_STATE = <const>'INITIALIZE_STATE';
const UPDATE_DATA = <const>'UPDATE_DATA';

// Action Generator
export const togglePostModalGen = (payload: boolean) => ({
  type: TOGGLE_POST_MODAL,
  payload,
});

export const toggleQRcodeGen = (payload: boolean) => ({
  type: TOGGLE_QR_CODE,
  payload,
});

export const changeNameInput = (payload: string) => ({
  type: CHANGE_NAME_INPUT,
  payload,
});

export const changeMessageInput = (payload: string) => ({
  type: CHANGE_MESSAGE_INPUT,
  payload,
});

export const initializeState = () => ({
  type: INITIALIZE_STATE,
});

export const updateData = (payload: any) => ({
  type: UPDATE_DATA,
  payload,
});

export interface Props_postPage {
  dataInfo: any;
  togglePostModal: boolean;
  toggleQRcode: boolean;
  modalName: string;
  modalMessage: string;
  mode: string;
}

// Initial State
const initialState: Props_postPage = {
  dataInfo: {},
  togglePostModal: false,
  toggleQRcode: false,
  modalName: '',
  modalMessage: '',
  mode: 'view',
};

// Reducer
export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA:
      return { ...state, dataInfo: action.payload };
    case TOGGLE_POST_MODAL:
      return { ...state, togglePostModal: action.payload };
    case TOGGLE_QR_CODE:
      return { ...state, toggleQRcode: action.payload };
    case CHANGE_NAME_INPUT:
      return { ...state, modalName: action.payload };
    case CHANGE_MESSAGE_INPUT:
      return { ...state, modalMessage: action.payload };
    case INITIALIZE_STATE:
      return { ...state, modalName: '', modalMessage: '' };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
