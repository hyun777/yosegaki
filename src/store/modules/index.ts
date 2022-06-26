import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import indexPage from './indexPage';
import postPage from './postPage';
import common from './common';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = (state: any, action: any) => {
  // 이렇게 switch문이 들어간느이유는 nextJS의 특징상
  // 서버와 클라이언트단이 둘다 존재하기때문에 hydrate과정이 필요해서
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ indexPage, postPage, common })(state, action);
  }
};

export default rootReducer;
