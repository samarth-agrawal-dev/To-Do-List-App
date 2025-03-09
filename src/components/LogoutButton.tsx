import { useAppDispatch } from '../hooks';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { logout } from '../auth/authSlice';

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}