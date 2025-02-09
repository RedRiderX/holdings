"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Logo({
  className = '',
  color = 'blue',
  emoji = '❤️',
  ...props
}) {
  return (
    <div
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden items-center justify-center",
        className,
        'bg-blue-500'
      )}
      {...props}
    >
        <div className="emoji leading-0 text-lg">{emoji}</div>
    </div>
  )
}

export { Logo }