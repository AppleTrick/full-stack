"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ReactNode, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // ThemeContext로 부터 값을 받아옴 값은 theme값과 toggle 함수를 받아옴
  const context = useContext(ThemeContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!context) {
    return <div>Theme context not available</div>;
  }

  const { theme, toggle } = context;

  // ui에 구체적인 적용
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
