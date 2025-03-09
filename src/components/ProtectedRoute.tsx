import { useAuth } from '../auth/authHooks';
import { JSX } from 'react';

export const ProtectedRoute = ({ children, unauthorized=<span>Sign In First</span> }: { children: JSX.Element, unauthorized: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : unauthorized;
};