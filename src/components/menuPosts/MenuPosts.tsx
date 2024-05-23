import Link from "next/link";
import styles from "./menuPost.module.css";
import Image from "next/image";

type MenuPostsProps = {
  withImage: boolean;
};

const MenuPosts = ({ withImage }: MenuPostsProps) => {
  return (
    <>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>park</span>
              <span className={styles.date}> - 20.05.24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>park</span>
              <span className={styles.date}> - 20.05.24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>park</span>
              <span className={styles.date}> - 20.05.24</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>park</span>
              <span className={styles.date}> - 20.05.24</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPosts;
