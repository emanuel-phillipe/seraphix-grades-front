"use client";

import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function InputPassword({label, placeholder, onChange, value}){

  const [isPasswordShown, setPasswordShown] = useState(false) 

  return (
    <>
      <span className="text-zinc-300 mb-1">{label}</span>
      <div className="flex w-full items-center relative">
        <input value={value} onChange={onChange} type={isPasswordShown ? "text" : "password"} placeholder={placeholder} className="w-full bg-transparent border-[1.5px] transition-colors border-zinc-700 focus:border-zinc-200 pl-3 py-[0.5rem] rounded-[8px] outline-none text-zinc-50 placeholder:text-zinc-500"/>  
        <div className="flex items-center cursor-pointer text-zinc-500 transition-colors hover:text-zinc-300" onClick={() => {setPasswordShown((state) => {return !state})}}>
          {isPasswordShown ? <Eye size={22} className="absolute right-3 "/> : <EyeSlash size={22} className="absolute right-3"/>}
        </div>
      </div>    
    </>
  ) 
} 