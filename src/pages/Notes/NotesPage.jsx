import styles from "./notes.module.css";
import { context } from "../../context/ContextApi";
import { useContext, useState } from "react";
import buttonPic from "./buttonPic.png";

const NotesPage = () => {
  const { selecteGroup } = useContext(context);
  const noteDateTime = new Date();
  // state to store notes into group
  const [noteFromUser, setNoteFromUser] = useState({
    notes: "",
    date: "",
    time: "",
  });
  const localData = JSON.parse(localStorage.getItem("group"));
  const groupData = localData.filter((val) => selecteGroup === val.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = `${noteDateTime.getHours()}:${noteDateTime.getMinutes()} ${
      noteDateTime.getHours() > 12 ? "PM" : "AM"
    }`;

    const month = noteDateTime.toLocaleString("default", { month: "long" });
    const noteDate = `${noteDateTime.getHours()} ${month} ${noteDateTime.getFullYear()}`;

    const localData = JSON.parse(localStorage.getItem("group"));
    localData.map((datas) => ({}));
  };

  return (
    <div className={styles.notesContainer}>
      {/* header start */}
      <header className={styles.header}>
        <div
          className={styles.roundedName}
          style={{ backgroundColor: groupData[0].color }}
        >
          {groupData[0].name?.length > 2
            ? groupData[0].name.slice(0, 2).toUpperCase()
            : groupData[0].name.toUpperCase()}
        </div>
        <p className={styles.fullGroupName}>{groupData[0].name}</p>
      </header>
      {/* header end */}

      {/* stored notes section start */}
      <div className={styles.storedNotes}>
        <div className={styles.individualNotes}>
          <div className={styles.dateTime}>
            <span>10:10 Am</span>
            <br />
            <span>9 March 2023</span>
          </div>
          <div className={styles.localNotes}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente labore dignissimos sed autem nobis provident ratione totam,
            voluptas iusto atque quos! Pariatur, nostrum sapiente quam placeat
            ad animi sit.
          </div>
        </div>
      </div>
      {/* stored notes section end */}

      {/* note taking area start */}
      <div className={styles.noteTakingArea}>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your text here..."
            className={styles.textSection}
            value={noteFromUser.notes}
            onChange={(e) =>
              setNoteFromUser({ ...noteFromUser, notes: e.target.value })
            }
          ></textarea>

          <button className={styles.formBtn}>
            <img src={buttonPic} alt="button pic" />
          </button>
        </form>
      </div>
      {/* note taking area start */}
    </div>
  );
};

export default NotesPage;
