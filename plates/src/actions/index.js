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
      if (!snapshot.exists()) {
        dispatch({
          type: 'NO_PLATES',
          payload: "No comments for the plates you've provided. Be the first to comment!"
        });
      } else {
      dispatch({
        type: 'SEARCH',
        payload: snapshot.val()
      });
    }
    });
  };
};

export function addCommentAction(plate, comment) {
  const upperCasePlate = plate.toUpperCase();
    firebase.database().ref(`/plates/${upperCasePlate}/comments`).push(comment);
  return {
    type: 'ADD_COMMENT'
  };
}
