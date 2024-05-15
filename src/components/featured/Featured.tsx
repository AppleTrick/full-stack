import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>AppleTrick 세계 최고의 개발자</b> AppleTrick의 개발 스토리
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            대법원장은 국회의 동의를 얻어 대통령이 임명한다. 국무총리는 대통령을
            보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다.
          </h1>
          <p className={styles.postDesc}>
            대법원장은 국회의 동의를 얻어 대통령이 임명한다. 국무총리는 대통령을
            보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다.
            국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를
            위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는
            경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 대통령은
            제3항과 제4항의 사유를 지체없이 공포하여야 한다. 제3항의 승인을 얻지
            못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그
            명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한
            때부터 당연히 효력을 회복한다.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
