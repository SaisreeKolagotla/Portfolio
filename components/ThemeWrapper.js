'use client'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function ThemeWrapper({ children }) {
  const dark = useSelector((state) => state.theme.dark)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return <>{children}</>
}
