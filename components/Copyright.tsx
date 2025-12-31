'use client'

import { useState, useEffect } from 'react'

export default function Copyright() {
  const [year, setYear] = useState<string>('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <span suppressHydrationWarning>
      {year}
    </span>
  )
}
