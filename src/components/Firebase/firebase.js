import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBh-2GD4AZvpYo0NZUv94KiUli6zO3tgqo",
  authDomain: "react-firebase-authentic-122d1.firebaseapp.com",
  databaseURL: "react-firebase-authentic-122d1",
  projectId: "react-firebase-authentic-122d1",
  storageBucket: '',
  messagingSenderId: "1067262297230",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
  
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);
}

export default Firebase;
