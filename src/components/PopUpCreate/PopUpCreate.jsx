import styles from "./popupcreate.module.css";
import { context } from "../../context/ContextApi";
import { useContext, useEffect, useState } from "react";

const PopUpCreate = () => {
  // state to handle error
  const [err, setErr] = useState({
    name: "",
    color: "",
  });

  // state to handle color status
  const [colorState, setColorState] = useState("");

  // states from context api
  const {
    setShowPopUp,
    groupName,
    setGroupName,
    groupColor,
    setGroupColor,
    notes,
    allGroups,
    setAllGroups,
    localData,
    showPopUP,
  } = useContext(context);

  // in this useeffect we are updating the data in local storage
  useEffect(() => {
    if (localData === null) {
      localStorage.setItem("group", JSON.stringify(allGroups));
    } else if (localData.length > 0) {
      localStorage.setItem("group", JSON.stringify(allGroups));
    }
  }, [allGroups]);

  // function to create new group
  const createNewGroup = (e) => {
    e.preventDefault();
    const name = groupName;
    const color = groupColor;

    // error handling
    if (name === "" && name.length !== 0 && color === "") {
      setErr({ name: "Enter a username", color: "Pick a color" });
    } else if (name === "") {
      setErr({ ...err, name: "Ener a name" });
    } else if (color === "") {
      setErr({ ...err, color: "Pick a color" });
    } else {
      const newGroup = {
        name: name,
        color: color,
        notes: notes,
      };
      if (localData === null) {
        setAllGroups([...allGroups, newGroup]);
      } else if (localData.length > 0) {
        setAllGroups([...localData, newGroup]);
      }

      setGroupName("");
      setGroupColor("");
      setErr({ name: "", color: "" });
    }
  };

  // function to remove pop up
  const removePopUp = () => {
    setGroupName("");
    setGroupColor("");
    setShowPopUp(false);
    setErr({ name: "", color: "" });
  };

  // function to hanldeColorChange
  const handleColorChange = (color) => {
    setGroupColor(color);
    setColorState(color);
  };
  return (
    <div
      className={styles.container}
      style={{ display: `${showPopUP === true ? "flex" : "none"}` }}
    >
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
        {err.name && <p className={styles.error}>{err.name}</p>}
        {/* group name end*/}
        {/* colour selection group start  */}
        <div className={styles.groupcolor}>
          <span>Choose colour</span>
          <div className={styles.colorGroup}>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick1}`}
              style={{
                border: `${
                  colorState === "#b38bfa" ? "2px solid black" : "none"
                } `,
              }}
              value={groupColor}
              onClick={() => handleColorChange("#b38bfa")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick2}`}
              style={{
                border: `${
                  colorState === "#ff79f2" ? "2px solid black" : "none"
                } `,
              }}
              value={groupColor}
              onClick={() => handleColorChange("#ff79f2")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick3}`}
              style={{
                border: `${
                  colorState === "#43e6fc" ? "2px solid black" : "none"
                } `,
              }}
              value={groupColor}
              onClick={() => handleColorChange("#43e6fc")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick4}`}
              style={{
                border: `${
                  colorState === "#f19576" ? "2px solid black" : "none"
                } `,
              }}
              value={groupColor}
              onClick={() => handleColorChange("#f19576")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick5}`}
              style={{
                border: `${
                  colorState === "#0047ff" ? "2px solid black" : "none"
                } `,
              }}
              value={groupColor}
              onClick={() => handleColorChange("#0047ff")}
            ></div>
            <div
              className={`${styles.colorIndividual} ${styles.colorPick6}`}
              style={{
                border: `${
                  colorState === "#6691ff" ? "2px solid black" : "none"
                } `,
              }}
              value={groupColor}
              onClick={() => handleColorChange("#6691ff")}
            ></div>
          </div>
        </div>
        {err.color && <p className={styles.error}>{err.color}</p>}
        {/* colour selection group end */}
        <button type="submit">Create</button>
        <div className={styles.removePopup} onClick={removePopUp}>
          X
        </div>
      </form>
    </div>
  );
};

export default PopUpCreate;
