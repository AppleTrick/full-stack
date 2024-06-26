"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Theme context not available</div>;
  }

  const { theme, toggle } = context;

  console.log(theme);

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? { background: "white" } : { background: "#0f172a" }}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball} style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
