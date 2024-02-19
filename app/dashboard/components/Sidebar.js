import { Article, Exam, Gear, GraduationCap, House, Note, Paperclip } from "@phosphor-icons/react/dist/ssr";
import SideButton from "./SideButton";

export default function Sidebar(){
  return (
    <div className="w-[17rem]">
      <div className="bg-zinc-800 p-6 rounded-[12px] my-14">
        <h2 className="text-2xl text-zinc-100 font-semibold">Olá, Emanuel</h2>
        <p className="text-zinc-400 font-normal">Hoje é dia 19 de Fevereiro.</p>

        <div className="mt-8 flex flex-col gap-4">
          <SideButton>
            <House weight="regular" size={24}/>
            Visão Geral
          </SideButton>

          <SideButton>
            <Exam weight="regular" size={24}/>
            Atividades
          </SideButton>

          <SideButton>
            <Paperclip weight="regular" size={24}/>
            Matérias
          </SideButton>

          <SideButton>
            <GraduationCap weight="regular" size={24}/>
            Boletim
          </SideButton>

          <SideButton>
            <Note weight="regular" size={24}/>
            Anotações
          </SideButton>

          <SideButton>
            <Gear weight="regular" size={24}/>
            Configurações
          </SideButton>
        </div>
      </div>
    </div>
  )
}