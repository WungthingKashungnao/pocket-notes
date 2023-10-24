import styles from "./leftscreen.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";

const LeftScreen = () => {
  const { setShowPopUp } = useContext(context);
  return (
    <div className={styles.LeftScreen}>
      <h1>Pocket Notes</h1>
      <div className={styles.notesGroup}>
        <button className={styles.createBtn} onClick={() => setShowPopUp(true)}>
          <i className="fa-solid fa-plus"></i>
          <span>Create Notes group</span>
        </button>
      </div>
    </div>
  );
};

export default LeftScreen;
