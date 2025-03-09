import { FirebaseError } from '@firebase/app';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error)
    }
};
export const handleSignUp = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully!');
    } catch {
        alert("An account with this email already exists.");
    }
};
export const handleSignIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error instanceof FirebaseError) {
            alert('Incorrect email or password.');
        } else if (error instanceof Error) {
            alert('An error occurred. Please try again.');
        } else {
            alert('An unknown error occurred.');
        }
    }
};