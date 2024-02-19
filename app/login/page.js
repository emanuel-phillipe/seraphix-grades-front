"use client"; // This is a client component 👈🏽

import { useEffect } from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage(){

  useEffect(() => {
    document.title = "Seraphix Auth - Login"
  })

  return (
    <div className="flex h-screen justify-between items-center">
      <div className="mb-[1rem]">
        <div className="mb-5">
          <h1 className="text-3xl font-semibold text-zinc-100">Login</h1>
          <p className="text-zinc-400">Olá, que bom te ver de novo!</p>
        </div>
        <LoginForm />
      </div>

      <div className="absolute right-0 bg-blue-700 w-[20rem] h-[30rem] blur-[15rem]"></div>
    </div>
  )
}