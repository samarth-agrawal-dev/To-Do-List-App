// Example SignIn component using Redux
// import { useAppDispatch } from '../hooks';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';

export function SignIn() {
//   const dispatch = useAppDispatch();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
    //   dispatch(setError(error.message));
    console.error(error)
    }
  };

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}