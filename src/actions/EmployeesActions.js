import firebase from 'firebase';

import { EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};
