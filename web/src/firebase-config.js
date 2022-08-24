/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBskAmsolzdwjSJAiextrcJeL4jYp8K8NE",
  authDomain: "friendlychat-36806.firebaseapp.com",
  projectId: "friendlychat-36806",
  storageBucket: "friendlychat-36806.appspot.com",
  messagingSenderId: "1003513952139",
  appId: "1:1003513952139:web:4ea4f63f09752f3cd3618e"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
