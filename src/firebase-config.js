/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyCwzxpRYBSsVcdw23C0mE18VBtbnXf5rHo",
    authDomain: "cool-firebase-nikolas-project.firebaseapp.com",
    projectId: "cool-firebase-nikolas-project",
    storageBucket: "cool-firebase-nikolas-project.appspot.com",
    messagingSenderId: "107152901475",
    appId: "1:107152901475:web:4c7af916b24bd5279dff56"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}