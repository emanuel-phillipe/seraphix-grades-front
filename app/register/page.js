"use client"; // This is a client component 👈🏽

import { useEffect } from "react";
import RegisterForm from "./components/RegisterForm";

export default function LoginPage(){

  useEffect(() => {
    document.title = "Seraphix Auth - Registro"
  })

  // {
  //   "name": "string and required",
  //   "nickname": "string and required",
  //   "school": "string and required",
  //   "email": "string, required and unique",
  //   "phone": "number and unique",
  //   "password": "string and required"
  // }

  return (
    <div className="flex h-screen justify-between items-center">
      <div className="mb-[1rem]">
        <div className="mb-5">
          <h1 className="text-3xl font-semibold text-zinc-100">Registro</h1>
          <p className="text-zinc-400">Ótima escolha! Digite suas informações para continuar.</p>
        </div>
        <RegisterForm />
      </div>

      <div className="absolute right-0 bg-blue-700 w-[20rem] h-[30rem] blur-[15rem]"></div>
    </div>
  )
}