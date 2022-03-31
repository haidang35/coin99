import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1l0DDDVhqiRQcSGCOAMBylVabRQIvPJE",
  authDomain: "coin99-24160.firebaseapp.com",
  databaseURL: "https://coin99-24160-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coin99-24160",
  storageBucket: "coin99-24160.appspot.com",
  messagingSenderId: "509546779632",
  appId: "1:509546779632:web:6242e6a05f3c4bfeb94335",
  measurementId: "G-YN23EVYGNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(app);

  
export const PATH_ENDPOINT = {
  COINLIST_BINANCE: 'coins/binance'
}