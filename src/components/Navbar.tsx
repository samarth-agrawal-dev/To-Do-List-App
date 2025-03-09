import { FaTasks } from "react-icons/fa";
import Auth from "./Auth";
import { ProtectedRoute } from "./ProtectedRoute";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  return (
    <div className=" bg-[#05ffc1] flex justify-between items-center w-full p-8 mx-auto h-15">
      <div className="font-[Rajdhani] font-bold text-3xl flex items-center gap-4"><FaTasks size={28} />ManagerPro</div>
      <ProtectedRoute unauthorized={<Auth />}>
        <div className="flex justify-end gap-5 items-center">
          <Profile />
          <LogoutButton />
        </div>
      </ProtectedRoute>
    </div>
  )
}

export default Navbar