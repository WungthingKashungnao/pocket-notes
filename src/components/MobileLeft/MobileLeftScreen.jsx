import styles from "./mobileleftscreen.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";
import GroupNameCard from "../GroupNameCard/GroupNameCard";

const MobileLeftScreen = () => {
  const { setShowPopUp, localData, setToggleHomeNotes, mobileToggle } =
    useContext(context);

  return (
    <div
      className={styles.LeftScreen}
      style={{ display: `${mobileToggle ? "none" : ""}` }}
    >
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

export default MobileLeftScreen;
