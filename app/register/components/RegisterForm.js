"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import Input from "./Input";
import InputPassword from "./InputPassword";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RegisterForm(){
  const {push} = useRouter()

  async function onStart(){
    var status = Cookies.get("auth_token");
    
    if(status) push("/dashboard")
  }

  useEffect(() => {
    onStart()
  })

  const [isPasswordShown, setPasswordShown] = useState(false) 
 
  const [state, setState] = useState({
    name: "",
    nickname: "",
    school: "",
    email: "",
    phone: "",
    password: "",
  }) 

  const buttonSituation = state.name != "" && state.nickname != "" && state.school != "" && state.email != "" && state.password != "" // CASO SEJA FALSO, O BOTÃO DE ENTRAR ESTARÁ BLOQUEADO

  return (
    <div className="flex">
      <form action="" className="flex flex-col w-[30rem]">

        <Input 
          label="Nome" 
          placeholder="Eduardo Silva Ferrari" 
          onChange={(event) => {setState((currentState)=> {return {...currentState, name: event.target.value}})}} 
          value={state.name} 
          type="text"
        />

        <Input 
          label="Apelido" 
          placeholder="Dudu" 
          onChange={(event) => {setState((currentState)=> {return {...currentState, nickname: event.target.value}})}} 
          value={state.nickname} 
          type="text"
        />

        <Input 
          label="Escola" 
          placeholder="Colégio Magalhães" 
          onChange={(event) => {setState((currentState)=> {return {...currentState, school: event.target.value}})}} 
          value={state.school} 
          type="text"
        />

        <Input 
          label="E-mail" 
          placeholder="eduardo.silva@hotmail.com" 
          onChange={(event) => {setState((currentState)=> {return {...currentState, email: event.target.value}})}} 
          value={state.email} 
          type="text"
        />

        <Input 
          label="Telefone" 
          placeholder="11977885677" 
          onChange={(event) => {setState((currentState)=> {return {...currentState, phone: event.target.value}})}} 
          value={state.phone} 
          type="number"
          max={11}
          min={11}
        />

        <InputPassword 
          label="Senha" 
          placeholder="Uma senha forte" 
          onChange={(event) => {setState((currentState)=> {return {...currentState, password: event.target.value}})}}
          value={state.password}  
        />    
        
        {
          buttonSituation ? <button className="py-[0.5rem] text-zinc-100 font-semibold bg-blue-700 transition-colors rounded-[8px] mt-[2rem] hover:bg-blue-600">Entrar</button> 
          : <button disabled className="cursor-not-allowed py-[0.5rem] text-zinc-100 font-semibold bg-blue-800 transition-colors rounded-[8px] mt-[2rem]">Entrar</button>
        }

<p className="mt-[1rem] text-zinc-300 font-normal">Já tem uma conta? <a className="text-blue-500 hover:text-blue-400 transition-colors font-medium" href="/login"> Entre nela agora</a></p>

      </form>
    </div>
  )
}