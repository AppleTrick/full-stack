import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>
              감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
              대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>park</span>
              <span className={styles.date}>20.05.24</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
