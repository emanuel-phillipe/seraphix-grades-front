export default function Input({label, placeholder, onChange, value, type, max, min}){
  return (
    <div className="flex flex-col w-full">
      <span className="text-zinc-300 mb-1">{label}</span>
      <input 
        value={value} 
        onChange={onChange} 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-transparent border-[1.5px] transition-colors border-zinc-700 focus:border-zinc-200 pl-3 py-[0.5rem] rounded-[8px] outline-none text-zinc-50 mb-[1rem] placeholder:text-zinc-500"
        min={min}
        max={min}
      />
    </div>
  )
} 