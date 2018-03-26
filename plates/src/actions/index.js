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
  return dispatch => {
    firebase.database().ref('/').orderByKey().startAt(term).endAt(`${term}\uf8ff`).on('value', snapshot => {
      dispatch({
        type: 'SEARCH',
        payload: snapshot.val()
      });
    });
  };
}

/*ref.orderByKey().startAt("b").endAt("b\uf8ff").on("child_added", function(snapshot) {
  console.log(snapshot.key());
});*/

/*
return dispatch => {
    firebase.database().ref('/').on('value', snapshot => {
      dispatch ({
        type: FETCH_PLATES,
        payload: snapshot.val()
      });
    });
  };
  */

  /*
  return dispatch => {
    firebase.database().ref('/').orderByKey().startAt(term).endAt(`${term}\uf8ff`).on('child_added', snapshot => {
      dispatch({
        type: 'SEARCH',
        payload: snapshot.val()
      });
    });
  };
  */
