import React,{useState} from 'react';
import {NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  
  FaBars,
  FaUser,
   FaThList, FaUserAlt 
}from "react-icons/fa";
import {
  IoIosHome,IoIosSettings
} from "react-icons/io";
import {BsReverseLayoutTextWindowReverse} from "react-icons/bs";
import {SlRocket} from "react-icons/sl";




  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:< IoIosHome />
    },
    {
      path:"/apppages",
      name:"App Pages >",
      icon:<FaUserAlt/>,
      submenu:[{
        title:"Clients"
      },{
        title:"Teams"
      },{
        title:"Team"
      }]
    },
    {
      path:"/auth",
      name:"Auth >",
      icon:<IoIosSettings/>
    },
    {
      path:"/user",
      name:"User >",
      icon:<FaUser/>
    },
    {
      path:"/layouts",
      name:"Layouts >",
      icon:<BsReverseLayoutTextWindowReverse/>
    },
    {
      path:"/landingpage",
      name:"Landing Page",
      icon:<SlRocket/>
    }
  ]


  const menuItemSublist=[
    
    {
      path:"/components",
      name:"Components  >",
      icon:<FaThList/>
    },
    {
      path:"/forms",
      name:"Forms >",
      icon:<FaThList/>
    },
    {
      path:"/tables",
      name:"Tables >",
      icon:<FaThList/> 
    },
    {
      path:"/collections",
      name:"Collections >",
      icon:<FaThList/>
    },
    {
      path:"/levelmenu",
      name:"Level Menu >",
      icon:<FaThList/>
    }
    
    
  ]



  const Sidebar = ({ children }) => { 
    const[isOpen,setIsOpen]=useState(true);

    const toggle=()=> setIsOpen(!isOpen); 
    return (
      <div class="main-container position-fixed ">
      
        <div className="top_section text-white h-[10%] w-[100%] lg:h-[10%]">
          <div className='bars mx-1 py-3 w-[100%]'><FaBars onClick={toggle}/></div>
          <a href="/" ClassName="logoside text-white text-3xl py-10 bg-violet-500"><pre> looper        </pre></a>
          <div className="circle">
          
        </div>
        </div>
        <motion.div animate={{ width: isOpen ? "200px" : "50px"}} className="sidebar">


    <section className='routes px-3 pt-5 allinks text-black'>
    {menuItem.map((route,index) =>(
    <NavLink to ={route.path} key={route.name} className="link">
    <div className="icon">{route.icon}</div>
    
    <div className='link_text'>{route.name}</div> 
    </NavLink>
    ))}
    </section>
    
    


    <section className='routes px-3 py-5 allinks text-black'>
    <h1 class="px-5 py-1">Interfaces</h1>
    {menuItemSublist.map((routeSub) =>(
    <NavLink to ={routeSub.path} key={routeSub.name} className="link">
    <div className="icon">{routeSub.icon}</div>
    
    <div className='link_text'>{routeSub.name}</div> 
    
    </NavLink>
    ))}
    </section>

    </motion.div>
    <main>
      {children}
    </main>
    </div> 
    )}

export default Sidebar
