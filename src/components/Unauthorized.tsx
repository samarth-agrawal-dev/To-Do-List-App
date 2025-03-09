import Navbar from "./Navbar"

const Unauthorized = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-black gap-3 flex items-center h-[91vh] flex-col">
            <p className="my-5 mt-8 text-[60px] font-bold font-[Poppins] text-white">WELCOME TO TASK MANAGER</p>
            <p className="text-white w-[77vw] text-center font-[Rajdhani] text-[25px]">We help you to manager your tasks so that you can manage your time well and maintain a disciplined, enthusiastic life. After all, nothing feels more satisfying than checking boxes from a to-do list. So, login and start using.</p>
            <img src="/screenshot-edited.png" alt="" className="fit"/>
        </div>
    </div>
  )
}

export default Unauthorized