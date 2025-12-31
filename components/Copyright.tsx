'use client'

import { useState, useEffect } from 'react'

export default function Copyright() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // 确保在客户端挂载后更新为客户端时间
    setYear(new Date().getFullYear())
  }, [])

  return (
    <span suppressHydrationWarning>
      {year}
    </span>
  )
}
