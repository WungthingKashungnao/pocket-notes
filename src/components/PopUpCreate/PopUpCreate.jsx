import styles from "./popupcreate.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";

const PopUpCreate = () => {
  const { setShowPopUp } = useContext(context);
  return (
    <div className={styles.container}>
      <div className={styles.createGroupPopUp}>
        <h2>Create New Notes Group</h2>
        {/* group name start */}
        <div className={styles.groupName}>
          <p>Group Name</p>
          <input type="text" placeholder="Enter your group name..." />
        </div>
        {/* group name end*/}
        {/* colour selection group start  */}
        <div className={styles.groupcolor}>
          <span>Choose colour</span>
          <div className={styles.colorGroup}>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick1}`}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick2}`}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick3}`}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick4}`}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick5}`}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick6}`}
            ></div>
          </div>
        </div>
        {/* colour selection group end */}
        <button>Create</button>
        <div className={styles.removePopup} onClick={() => setShowPopUp(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default PopUpCreate;
