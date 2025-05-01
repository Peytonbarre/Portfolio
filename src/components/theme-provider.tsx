"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextThemesProvider>{children}</NextThemesProvider>
} 