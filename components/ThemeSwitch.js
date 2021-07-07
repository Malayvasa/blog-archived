import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import * as React from 'react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <>
      <DarkModeSwitch
        className="ml-2 md:ml-4"
        checked={mounted && (theme === 'light' ? false : true)}
        onChange={toggleDarkMode}
        size={24}
      />
    </>
  )
}

export default ThemeSwitch
