import styles from "./leftscreen.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";
import GroupNameCard from "../GroupNameCard/GroupNameCard";

const LeftScreen = () => {
  const { setShowPopUp, localData, setToggleHomeNotes } = useContext(context);

  return (
    <div className={styles.LeftScreen}>
      <div className={styles.brand}>
        <h1>Pocket Notes</h1>
        <button className={styles.createBtn} onClick={() => setShowPopUp(true)}>
          <i className="fa-solid fa-plus"></i>
          <span>Create Notes group</span>
        </button>
      </div>
      <div className={styles.notesGroup}>
        <div
          className={styles.nameCardList}
          onClick={() => setToggleHomeNotes(true)}
        >
          {localData?.map((datas, idx) => (
            <div key={idx} className={styles.nameCard}>
              <GroupNameCard data={datas} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftScreen;
