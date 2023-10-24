import styles from "./popupcreate.module.css";
import { context } from "../../context/ContextApi";
import { useContext, useEffect } from "react";

const PopUpCreate = () => {
  const {
    setShowPopUp,
    groupName,
    setGroupName,
    groupColor,
    setGroupColor,
    notes,
    allGroups,
    setAllGroups,
  } = useContext(context);

  // whenver allgroups is updated store the groups in the local storage
  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(allGroups));
  }, [allGroups]);

  // function to create new group
  const createNewGroup = (e) => {
    e.preventDefault();
    const name = groupName;
    const color = groupColor;
    if (name === "" || color === "") {
      alert("pick the choices");
    } else {
      const newGroup = {
        name: name,
        color: color,
        notes: notes,
      };
      setAllGroups([...allGroups, newGroup]);
      setGroupName("");
      setGroupColor("");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.createGroupPopUp} onSubmit={createNewGroup}>
        <h2>Create New Notes Group</h2>
        {/* group name start */}
        <div className={styles.groupName}>
          <p>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name..."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        {/* group name end*/}
        {/* colour selection group start  */}
        <div className={styles.groupcolor}>
          <span>Choose colour</span>
          <div className={styles.colorGroup}>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick1}`}
              value={groupColor}
              onClick={() => setGroupColor("#b38bfa")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick2}`}
              value={groupColor}
              onClick={() => setGroupColor("#ff79f2")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick3}`}
              value={groupColor}
              onClick={() => setGroupColor("#43e6fc")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick4}`}
              value={groupColor}
              onClick={() => setGroupColor("#f19576")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick5}`}
              value={groupColor}
              onClick={() => setGroupColor("#0047ff")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick6}`}
              value={groupColor}
              onClick={() => setGroupColor("#6691ff")}
            ></div>
          </div>
        </div>
        {/* colour selection group end */}
        <button type="submit">Create</button>
        <div className={styles.removePopup} onClick={() => setShowPopUp(false)}>
          X
        </div>
      </form>
    </div>
  );
};

export default PopUpCreate;
