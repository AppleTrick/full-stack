import Pagenation from "../pagenation/Pagenation";
import styles from "./cardlist.module.css";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagenation />
    </div>
  );
};

export default CardList;
