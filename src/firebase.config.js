import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCWMs9ekfKCqoY0K34Xom3lPPH_j2z0of8",
  authDomain: "house-6d4a0.firebaseapp.com",
  projectId: "house-6d4a0",
  storageBucket: "house-6d4a0.appspot.com",
  messagingSenderId: "377083740770",
  appId: "1:377083740770:web:50cf373692d949431b473b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
