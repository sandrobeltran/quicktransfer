import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "quick-transfer-ac015.firebaseapp.com",
  projectId: "quick-transfer-ac015",
  storageBucket: "quick-transfer-ac015.appspot.com",
  messagingSenderId: "200545612029",
  appId: "1:200545612029:web:e03ae9df28f405d8aa8e94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

if (typeof document !== "undefined" && typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}
