'use client';
import { useState } from "react";

export const InputSearch = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <input 
      className="h-[2.5rem] w-full focus:outline-none border-3 rounded-xl border-app-green hover:bg-gray-200/30 px-2" 
      placeholder="Buscar..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}