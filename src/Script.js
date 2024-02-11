import React, { useState } from "react";
import ReactDOM from "react-dom/client";



const App = () => {
  const [Show , SetShow]=useState(false)
  const handleclick = () => { 
    const date= new Date()
    return (

      // window.location.href="https://drive.google.com/file/d/1m2e3_6pLpBybt79WYAv0Ii03Y19GWp_G/view?usp=sharing"
      window.open("https://drive.google.com/file/d/1m2e3_6pLpBybt79WYAv0Ii03Y19GWp_G/view?usp=sharing")
      
    )
  }
  return (
    <div className="flex">
      <div className=" w-[20rem] h-[20rem] bg-white shadow-2xl rounded-xl ml-10 mt-10 relative">
        <div className="w-full h-[6rem] bg-gray-300 absolute rounded-t-xl">
          <img className="w-full h-full rounded-t-xl" src="https://images.unsplash.com/photo-1615639433680-16171300bed7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className=" w-24 h-24  bg-gray-50 mt-11 ml-28 absolute rounded-full">
          <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className="mt-40 ml-2 absolute flex gap-2">
          <h1>Name:</h1>
          <h1 className="text-orange-500 font-semibold">SuRaj Khonde </h1>
        </div>
      </div>
      <div className="w-[20rem] h-[15rem] bg-white  rounded-xl   mt-[23rem] -ml-[20rem] relative">
       <img  className="w-[20rem] h-[15rem] rounded-xl absolute" src="https://images.unsplash.com/photo-1706800696296-69e1271b4521?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
      </div>  
      <div className="w-[40rem] h-[36rem]  bg-white shadow-2xl rounded-xl ml-10 mt-10 relative z-0">
        <div className="w-[7rem] h-full bg-blue-200 absolute rounded-l-xl z-10">
          <div className="w-[7rem] h-full bg-pink-200 ml-[33rem] absolute rounded-r-xl z-10"></div>
          <div className=" w-16 h-16 bg-gray-200 mt-11 ml-20 absolute rounded-full">
            <img className="w-fit rounded-full h-fit "src="https://cdn.vectorstock.com/i/1000x1000/07/62/icons-suitcase-vector-3990762.webp"/>
          </div>
          <div className="flex mt-16 ml-40 absolute ">
              <h1>Role:</h1>
            <h1>MernStackDeveloper</h1>
            <button className="w-[8rem] h-[2rem] shadow-xl bg-slate-200 rounded-xl ml-3 font-bold"  onClick={handleclick}>Resume </button>
          </div>
          <div className=" mt-28 ml-36 absolute overflow-hidden ">
            <h1>Skill:HTML,TailwindCss,JavaScript,Node,Express,Git</h1>
            <p className="text-gray-400">I've been through tough times in my career, but they've only made me more determined to succeed. During my full-stack developer training, I always put in extra effort and stayed ahead of my classmates. This dedication paid off when I landed an internship at a tech company because of my strong skills in React. I've consistently surpassed expectations in my classes and previous roles. Looking ahead, I plan to get certified as an AWS Cloud Developer and become proficient in data structures and algorithms. While I may not have as much experience right now, I'm confident that my commitment to learning and growth will set me apart in the developer world.</p>
          </div> 
        </div>

      </div>
      <div className="w-[23rem] h-[40rem] mt-10 ml-4 shadow-xl rounded-xl bg-white relative z-0">
         <img  className="rounded-t-xl" src="https://images.unsplash.com/photo-1707058665477-560297ffe913?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className="w-full h-[3px] bg-orange-500 absolute z-10 mt-[1px]"></div>
        <p className="text-gray-600 ml-2 mt-2">The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist.

The Universe contains billions of galaxies, each containing millions or billions of stars. The space between the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered particles of dust or a few hydrogen atoms per cubic centimeter. Space is also filled with radiation (e.g. light and heat), magnetic fields and high energy particles (e.g. cosmic rays).

The Universe is incredibly huge. It would take a modern jet fighter more than a million years to reach the nearest star to the Sun.  </p>
      </div>  
    </div>
    

  )
  
};
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)
root.render(<App />);