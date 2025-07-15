import {  ContactIcon, Home, Info, ServerIcon } from "lucide-react";

const FloatSection = () => {
  
    const menuList=[
      
        {name:"Home",icon:Home},
        {name:"About Us",icon:Info},
        {name:"Services",icon:ServerIcon},
        {name:"Contact us",icon:ContactIcon},
    
    ]    


  return (
    <div className="fixed bottom-4 left-0 w-full flex items-center justify-center">
        
        <div className="w-2/5 cursor-pointer font-bold  flex justify-evenly shadow-md p-5  text-white bg-black rounded-3xl ">
           {menuList.map((menu,index)=>(
             <div key={index}>
                <menu.icon />
             </div>
           ))}
        </div>
     
        
    </div>
  )
}

export default FloatSection