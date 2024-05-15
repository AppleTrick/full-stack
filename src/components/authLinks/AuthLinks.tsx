"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const status = "noauthenticated";

  const [open, setOpen] = useState(false);

  const onAndOff = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {status == "noauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={onAndOff}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.reponesiveMenu}>
          <Link href="/">Hompage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status == "noauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default AuthLinks;
