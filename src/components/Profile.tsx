import { useAuth } from '../auth/authHooks';
import { FaRegUser } from "react-icons/fa";
export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      {user && (
        <div className='flex items-center gap-5'>
          {
            user.photoUrl ?
            <img className='rounded-full' src={user.photoUrl as string} width={50} /> :
            <FaRegUser size={28}/>
          }
          <p className='font-[Poppins] font-semibold'>{user.uid ? user.uid : user.email }</p>
        </div>
      )}
    </div>
  );
}