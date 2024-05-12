import Pagenation from "../pagenation/Pagenation";
import styles from "./cardlist.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagenation />
    </div>
  );
};

export default CardList;
