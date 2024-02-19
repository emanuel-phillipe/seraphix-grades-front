export default function SideButton({children}){
  return (
    <button className="flex items-center gap-6 bg-transparent hover:bg-zinc-700/50 hover:text-zinc-100 transition-colors p-[9px] rounded-[8px] text-[1rem] text-zinc-300 font-normal">
      {children}
    </button>
  )
}