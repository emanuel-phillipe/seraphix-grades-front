"use client"; // This is a client component 👈🏽

import { EyeSlash, Eye } from "@phosphor-icons/react/dist/ssr";
import { data } from "autoprefixer";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginForm(){
  const {push} = useRouter()

  async function onStart(){
    var status = Cookies.get("auth_token");
    
    if(status) push("/dashboard")
  }

  useEffect(() => {
    onStart()
  })
 
  const [isPasswordShown, setPasswordShown] = useState(false) 
  const [isThereErrors, setError] = useState(false) 
  const [state, setState] = useState({
    email: "",
    password: "",
  }) 

  async function onSubmit(event){
    event.preventDefault()

    var status = "";

    const dataToSend = {
      email: state.email, 
      password: state.password,
    }

    const response = await axios.post("https://seraphgradesapi.onrender.com/api/v1/user/login", dataToSend, {headers: {"Content-Type": "application/json"}, withCredentials: true})
    .then((data) => {status = data.status})

      if(status == 200) push("/dashboard")
      else console.log("ERRO");
  }

  const buttonSituation = state.email != "" && state.password != "" // CASO SEJA FALSO, O BOTÃO DE ENTRAR ESTARÁ BLOQUEADO

  return (
    <div className="flex">
      <form onSubmit={onSubmit} className="flex flex-col w-[30rem]">

        <span className="text-zinc-300 mb-1">E-mail</span>
        <input value={state.email} onChange={(event) => {setState((currentState)=> {return {...currentState, email: event.target.value}})}} type="text" placeholder="eu@hotmail.com" className="bg-transparent border-[1.5px] transition-colors border-zinc-700 focus:border-zinc-200 pl-3 py-[0.5rem] rounded-[8px] outline-none text-zinc-50 mb-[1rem] placeholder:text-zinc-500"/>
        
        <span className="text-zinc-300 mb-1">Senha</span>
        <div className="flex w-full items-center relative">
          <input value={state.password} onChange={(event) => {setState((currentState)=> {return {...currentState, password: event.target.value}})}} type={isPasswordShown ? "text" : "password"} placeholder="Digite sua senha" className="w-full bg-transparent border-[1.5px] transition-colors border-zinc-700 focus:border-zinc-200 pl-3 py-[0.5rem] rounded-[8px] outline-none text-zinc-50 placeholder:text-zinc-500"/>  
          <div className="flex items-center cursor-pointer text-zinc-500 transition-colors hover:text-zinc-300" onClick={() => {setPasswordShown((state) => {return !state})}}>
            {isPasswordShown ? <Eye size={22} className="absolute right-3 "/> : <EyeSlash size={22} className="absolute right-3"/>}
          </div>
        </div>        
        
        <a href="/" className="mt-[12px] text-blue-500 transition-colors font-medium hover:text-blue-400">Esqueceu a senha?</a>
        
        {
          buttonSituation ? <button type="submit" className="py-[0.5rem] text-zinc-100 font-semibold bg-blue-700 transition-colors rounded-[8px] mt-[1rem] hover:bg-blue-600">Entrar</button> 
          : <button disabled className="cursor-not-allowed py-[0.5rem] text-zinc-100 font-semibold bg-blue-800 transition-colors rounded-[8px] mt-[1rem]">Entrar</button>
        }

        <p className="mt-[12px] text-zinc-300 font-normal">Não registrado? <a className="text-blue-500 hover:text-blue-400 transition-colors font-medium" href="/register"> Crie uma conta</a></p>
      </form>
    </div>
  )
}