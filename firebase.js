// # Import the functions you need from the SDKs you need
// Here we tree shaking, importing the specific package we need!
import { getApps, initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// # Your web app's Firebase configuration
/* https://nextjs.org/docs/basic-features/environment-variables:
By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser. In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_*`. */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// # Initialize Firebase:
// Singleton operation, we ensuring only one instance is open for our app.
// We use `getApps` a (read-only) array of all `firebase` initialized apps.
// If array is empty, initialize new `app` instance, otherwise get current.
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()
export const db = getFirestore(app)
