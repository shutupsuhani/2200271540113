import {  ContactIcon, Home, Info, Search, ServerIcon, User2Icon } from "lucide-react";

const Navbar = () => {
  
  const menuList=[
    {name:"Home",icon:Home},
    {name:"About Us",icon:Info},
    {name:"Services",icon:ServerIcon},
    {name:"Contact us",icon:ContactIcon},

  ]  

  return (
    <div className="p-4 bg-white z-50 shadow-sm border-b flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <img className="h-10 w-10 rounded-full" src="/logo1.jpg" alt="logo" />
        <h1 className="hidden text-lg font-semibold sm:block">VRV Security</h1>
      </div>


      <div className="flex items-center space-x-4">
        {menuList.map((menu,index)=>(
            <div key={index} className="flex items-center  cursor-pointer">
            
           </div>
        ))}
      </div>

      {/* Center Section: Search */}
      <div className="flex-grow max-w-lg mx-4">
        <div className="flex border border-gray-400 items-center rounded-lg p-2">
          <Search className="text-gray-500" />
          <input
            className="focus:outline-none w-full border-none pl-2"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right Section: User Icon */}
      <div className="flex items-center">
        <div className="hidden cursor-pointer lg:flex items-center bg-black text-white rounded-full p-2">
          <User2Icon className="w-5 h-5" />
        </div>
        <div className="lg:hidden cursor-pointer">
          <button className="text-black hover:bg-gray-100 rounded-full p-2">
            <User2Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
