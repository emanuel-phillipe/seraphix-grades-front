"use client"; // This is a client component 👈🏽

import { useEffect } from "react"
import Sidebar from "./components/Sidebar";
import axios from "axios";

export default function DashboardPage(){

  async function onStart(){
    var data = await axios.get("https://seraphgradesapi.onrender.com/api/v1/user/info", {withCredentials: true})
    .catch(() => {
      push("/login")
      return false;
    })
    
    if(data.status != 200 || !data.status) push("/login")    
  }
  
  useEffect(() => {
    onStart()
    document.title = "Seraphix Grades - Dashboard"
  })

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-slate-400">
          sdsds
        </div>
      </div>
    </>
  )
}