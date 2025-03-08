
import { useAppSelector, useAppDispatch } from "../hooks";
import { setUser, logout } from './authSlice'; 
import { User } from "@firebase/auth";

export const useAuth = () => {
  return useAppSelector((state) => state.auth);
};


export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  
  return {
    setUser: (user: User | null) => dispatch(setUser(user)),
    logout: () => dispatch(logout())
  };
};