"use client"; // This is a client component 👈🏽

import { useEffect } from "react"
import Sidebar from "./components/Sidebar";

export default function DashboardPage(){

  useEffect(() => {
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