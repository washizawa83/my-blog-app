'use client'

import { useEffect, useRef, useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

export type TooltipOption = {
  label: string
  color?: 'red'
  handleClick: () => void
}

type Props = {
  options: TooltipOption[]
}

export const Tooltip = ({ options }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const onClickMenu = (callback: () => void) => {
    setIsOpenMenu(false)
    callback()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={menuRef}
      className="relative bg-slate-700 hover:bg-slate-600 rounded-full p-1 cursor-pointer"
    >
      <span onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <IconContext.Provider value={{ size: '20px' }}>
          <FiMoreVertical />
        </IconContext.Provider>
      </span>
      {isOpenMenu && (
        <div className="absolute -bottom-18 right-0 shadow-lg">
          <div className="min-w-32 rounded-lg overflow-hidden">
            <ul>
              {options.map((option, i) => (
                <li
                  key={i}
                  className={`${option.color === 'red' ? 'bg-rose-700 hover:bg-rose-600' : 'bg-slate-700 hover:bg-slate-600'} px-2 py-1`}
                  onClick={() => onClickMenu(option.handleClick)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
