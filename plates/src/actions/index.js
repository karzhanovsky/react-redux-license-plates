import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBxFcWUISZrMNH0_3JmTq7ToItj0Ew1PFs",
    authDomain: "tablice-4fce5.firebaseapp.com",
    databaseURL: "https://tablice-4fce5.firebaseio.com",
    projectId: "tablice-4fce5",
    storageBucket: "tablice-4fce5.appspot.com",
    messagingSenderId: "1002406223736"
  };
  firebase.initializeApp(config);

export function searchAction(term) {
  const upperCaseTerm = term.toUpperCase()
  return dispatch => {
    firebase.database().ref(`/plates/${upperCaseTerm}/comments`).on('value', snapshot => {
      dispatch({
        type: 'SEARCH',
        payload: snapshot.val()
      });
    });
  };
};

/*
export function searchAction(term) {
  return dispatch => {
    firebase.database().ref('/').orderByKey().startAt(term).endAt(`${term}\uf8ff`).on('value', snapshot => {
      dispatch({
        type: 'SEARCH',
        payload: snapshot.val()
      });
    });
  };
};
*/
