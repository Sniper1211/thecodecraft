'use client'

import { useState, useEffect } from 'react'

export default function Copyright() {
  const [year, setYear] = useState<string>('Loading...')
  const [fullDate, setFullDate] = useState<string>('')

  useEffect(() => {
    const now = new Date()
    setYear(now.getFullYear().toString())
    setFullDate(now.toString())
    console.log('Client Side Time:', now.toString())
  }, [])

  return (
    <span suppressHydrationWarning className="copyright-year group relative cursor-help border-b border-dashed border-slate-400">
      {year}
      {/* 悬停显示完整时间，用于调试 */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Debug: {fullDate}
      </span>
    </span>
  )
}
