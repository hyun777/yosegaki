// Action Types
const TOGGLE_GLOBAL_LOADING = <const>'TOGGLE_GLOBAL_LOADING';

// Action Generator
export const toggleGlobalLoading = (payload: boolean) => ({
  type: TOGGLE_GLOBAL_LOADING,
  payload,
});

// Initial State
const initialState = {
  globalLoading: false,
};

// Reducer
export default (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_GLOBAL_LOADING:
      return { ...state, globalLoading: action.payload };
    default:
      return state;
  }
};
