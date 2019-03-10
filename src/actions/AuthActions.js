import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    email,
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    password,
  };
};

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(loginUserSuccess(dispatch))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(loginUserSuccess(dispatch))
        .catch(loginUserFail(dispatch));
    });
};

const loginUserSuccess = dispatch => user => {
  dispatch({ type: LOGIN_USER_SUCCESS, user });
  Actions.main();
};

const loginUserFail = dispatch => error => {
  dispatch({ type: LOGIN_USER_FAIL, error: 'Authentication Failed!' });
};
