import { FIREBASE_AUTH, FIRESTORE } from 'firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { arrayRemove, arrayUnion, doc, getDoc, runTransaction, setDoc } from 'firebase/firestore/lite';
import { UserDocData, User } from '@/types/firebase';

/**
 * Registers a new user using their email and password.
 * 
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise resolving to the user credential object.
 */
async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    return userCredential;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

/**
 * Logs in a user using their email and password.
 * 
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise resolving to the user credential object.
 */
async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    return userCredential;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Logs out the currently signed-in user.
 * 
 * @returns A promise that resolves when the logout process is complete.
 */
async function logoutUser() {
  try {
    await signOut(FIREBASE_AUTH);
    console.log('User logged out successfully.');
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

/**
 * Creates a document for a new user in the Firestore 'users' collection.
 *
 * @param data An object containing the user's uid, firstName, and lastName.
 * @returns A promise that resolves when the document is successfully created.
 */
async function createUserDoc(data: User) {
  try {
    const docRef = doc(FIRESTORE, 'users', data.uid);
    await setDoc(docRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      moviesId: []
    });
    console.log('User document created successfully');
  } catch (error) {
    console.error('Failed to create user document:', error);
    throw error;
  }
};

/**
 * Fetches a user document from Firestore based on the user's UID.
 *
 * @param uid The UID of the user whose document needs to be fetched.
 * @returns A promise that resolves to the user document data.
 */
async function getUserDoc(uid: string) {
  const userDocRef = doc(FIRESTORE, 'users', uid);
  try {
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      console.log('User data:', docSnap.data());
      return docSnap.data() as UserDocData;
    } else {
      console.log('No such document!');
      throw new Error('No such document!'); // Throws an error if the document does not exist
    }
  } catch (error) {
    console.error('Error fetching user document:', error);
    throw error;
  }
};

/**
 * Toggles a movie ID in the moviesId array of a user's document in Firestore.
 *
 * @param uid The UID of the user whose document is to be updated.
 * @param movieId The movie ID to toggle in the moviesId array.
 */
async function toggleMovieId(uid: string, movieId: number) {
  const userDocRef = doc(FIRESTORE, 'users', uid);

  try {
    await runTransaction(FIRESTORE, async (transaction) => {
      const userDoc = await transaction.get(userDocRef);
      if (!userDoc.exists()) {
        throw new Error("Document does not exist!");
      }

      const userData = userDoc.data();
      const moviesId = userData.moviesId as number[];

      if (moviesId.includes(movieId)) {
        transaction.update(userDocRef, { moviesId: arrayRemove(movieId) });
        console.log(`Removed movie ID ${movieId} from user ${uid}.`);
      } else {
        transaction.update(userDocRef, { moviesId: arrayUnion(movieId) });
        console.log(`Added movie ID ${movieId} to user ${uid}.`);
      }
    });
    console.log('Transaction successfully committed!');
  } catch (error) {
    console.error('Transaction failed: ', error);
    throw error;
  }
};

/**
 * Gets the UID of the currently logged-in user.
 * 
 * @returns The UID of the current user or null if no user is logged in.
 */

function getCurrentUserUid () {
  const user = FIREBASE_AUTH.currentUser;
  return user ? user.uid : "";
};

export {
  registerUser,
  loginUser,
  logoutUser,
  createUserDoc,
  getUserDoc,
  toggleMovieId,
  getCurrentUserUid,
}