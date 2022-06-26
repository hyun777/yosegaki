// Action Types
const CHANGE_ADDRESSEE_INPUT = <const>'CHANGE_ADDRESSEE_INPUT';
const CHANGE_EMAIL_INPUT = <const>'CHANGE_EMAIL_INPUT';
const CHANGE_DEADLINE_INPUT = <const>'CHANGE_DEADLINE_INPUT';
const CHANGE_PASSWORD = <const>'CHANGE_PASSWORD';
const INITIALIZE_STATE = <const>'INITIALIZE_STATE';

// Action Generator
export const changeAddresseeInput = (payload: string) => ({
  type: CHANGE_ADDRESSEE_INPUT,
  payload,
});

export const changeEmailInput = (payload: string) => ({
  type: CHANGE_EMAIL_INPUT,
  payload,
});

export const changeDeadlineInput = (payload: string) => ({
  type: CHANGE_DEADLINE_INPUT,
  payload,
});

export const changePassword = (payload: string) => ({
  type: CHANGE_PASSWORD,
  payload,
});

export const initializeState = () => ({
  type: INITIALIZE_STATE,
});

// Initial State
const initialState = {
  addresseeInputValue: '',
  emailInputValue: '',
  deadlineInputValue: '',
  password: '',
};

// Reducer
export default (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_ADDRESSEE_INPUT:
      return { ...state, addresseeInputValue: action.payload };
    case CHANGE_EMAIL_INPUT:
      return { ...state, emailInputValue: action.payload };
    case CHANGE_DEADLINE_INPUT:
      return { ...state, deadlineInputValue: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case INITIALIZE_STATE:
      return { ...initialState };
    default:
      return state;
  }
};
