// TODO: Set up Firebase Cloud Messaging service worker

import {getMessaging} from 'firebase/messaging/sw'
import {firebaseApp} from "./index";

getMessaging(firebaseApp)
console.log('Firebase messaging service worker is set up');