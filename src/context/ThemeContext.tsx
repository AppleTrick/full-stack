"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

// 컨텍스트 초기값 설정
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 로컬 스토리지에서 데이터를 가지고 옴 만약에 데이터가 없을경우 값을 생성
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  // 현재 테마의 상태관리
  const [theme, setTheme] = useState<string>(getFromLocalStorage);

  // toogle 클릭시 값을 변환
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //theme 상태가 변경될 때마다 이를 로컬 스토리지에 저장하여, 사용자의 테마 선택을 유지
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
