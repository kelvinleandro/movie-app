import { FIREBASE_AUTH } from 'firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

/**
 * Registers a new user using their email and password.
 * 
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise resolving to the user credential object.
 */
export async function registerUser(email: string, password: string) {
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
export async function loginUser(email: string, password: string) {
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
export async function logoutUser() {
  try {
    await signOut(FIREBASE_AUTH);
    console.log('User logged out successfully.');
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};