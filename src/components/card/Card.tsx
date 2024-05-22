import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>22.05.2024</span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <Link href="/">
            <h1>
              헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는
              국내법과 같은 효력을 가진다.
            </h1>
          </Link>
          <p>
            군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다.
            국회의원과 정부는 법률안을 제출할 수 있다. 국회는 정부의 동의없이
            정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수
            없다. 국민의 자유와 권리는 헌법에 열거되지 아니한 이유로 경시되지
            아니한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다.
          </p>
          <Link href="/">ReadMore</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
