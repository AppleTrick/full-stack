"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ReactNode, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  const context = useContext(ThemeContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!context) {
    return <div>Theme context not available</div>;
  }

  const { theme, toggle } = context;

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
