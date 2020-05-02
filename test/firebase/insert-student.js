const { firebase, firebaseApp } = require('../../firebase');

firebase.database().ref(`students/802`).set({
    id: 802,
    username: 'username',
    email: 'email',
}).then(() => {
    firebaseApp.delete()
});

