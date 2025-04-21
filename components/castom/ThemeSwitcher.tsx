'use client'

import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// const useTheme = () => {
//   const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
//     setTheme(storedTheme ?? 'system')
//   }, [])

//   useEffect(() => {
//     const root = document.documentElement
//     if (theme === 'dark') {
//       root.classList.add('dark')
//     } else if (theme === 'light') {
//       root.classList.remove('dark')
//     } else {
//       // system
//       const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//       isSystemDark ? root.classList.add('dark') : root.classList.remove('dark')
//     }

//     localStorage.setItem('theme', theme)

//     // Перезагружаем страницу только при изменении на светлую или тёмную тему
//     if (theme === 'light' || theme === 'dark') {
//       setTimeout(() => {
//         location.reload()
//       }, 100) // Задержка, чтобы все изменения успели примениться
//     }
//   }, [theme])

//   return {
//     theme,
//     setLightTheme: () => setTheme('light'),
//     setDarkTheme: () => setTheme('dark'),
//     setSystemTheme: () => setTheme('system'),
//   }
// }

export default function ThemeSwitcher() {
  // const { theme, setLightTheme, setDarkTheme, setSystemTheme } = useTheme()

  // const getItemStyle = (target: 'light' | 'dark' | 'system') => {
  //   const isActive = theme === target
  //   return `w-full flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
  //     isActive
  //       // ? target === 'light'
  //       //   ? 'bg-white text-black'
  //       //   : target === 'dark'
  //       //     ? 'bg-zinc-900 text-white'
  //       //     : 'bg-gray-700 text-white'
  //       // : 'hover:bg-zinc-800 hover:text-white text-gray-300'
  //   }`
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
      className="text-left text-gray-300">
        Внешний вид &gt;
      </DropdownMenuTrigger>
      <DropdownMenuContent 
      className="bg-black text-white w-40">
        <DropdownMenuItem 
        // className={getItemStyle('light')} onClick={setLightTheme}
        >
          <span>Светлая</span>
          {/* {theme === 'light' && <FaCheck />} */}
        </DropdownMenuItem>
        <DropdownMenuItem 
        // className={getItemStyle('dark')} onClick={setDarkTheme}
        >
          <span>Тёмная</span>
          {/* {theme === 'dark' && <FaCheck />} */}
        </DropdownMenuItem>
        <DropdownMenuSeparator 
        className="bg-gray-600" 
       />
        <DropdownMenuItem 
        // className={getItemStyle('system')} onClick={setSystemTheme}
        >
          <span>Система</span>
          {/* {theme === 'system' && <FaCheck />} */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
