"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DashboardPage(){
  const {push} = useRouter()
  const [isUserAuthorized, setUserAuthorization] = useState(false)

  async function onStart(){
    var data = await axios.get("https://seraphgradesapi.onrender.com/api/v1/user/info", {withCredentials: true})
    .catch(() => {
      push("/login")
      return false;
    })    
    setUserAuthorization((currentState) => !currentState)
  }
  
  useEffect(() => {
    onStart()
    document.title = "Seraphix Grades - Dashboard"
  })

  return (
    <>
      {() => {if(isUserAuthorized) {
        return (
          <div className="grid grid-cols-2">
            <div className="flex">
              <Sidebar />
            </div>
            <div className="bg-slate-400 h-screen">
              sdsds
            </div>
        </div>
        )
      }else {
        return (
          <div>
            <h1>Não autorizado</h1>
          </div>
        )
      }}}
    </>
  )
}