import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa192sS2Gv_xZx4UAOoqfXfSeTqsaYlLM",
  authDomain: "lafikadb.firebaseapp.com",
  projectId: "lafikadb",
  storageBucket: "lafikadb.appspot.com",
  messagingSenderId: "830670637365",
  appId: "1:830670637365:web:7448be96e185d30d8de47c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
