import Link from "next/link";
import style from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "noauthenticated";

  return (
    <>
      {status == "noauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={style.links}>Logout</span>
        </>
      )}
    </>
  );
};
export default AuthLinks;
