import { useAuth } from '../auth/authHooks';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      )}
    </div>
  );
}