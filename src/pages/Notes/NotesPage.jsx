import styles from "./notes.module.css";
import { context } from "../../context/ContextApi";
import { useContext, useState } from "react";
import buttonPic from "./buttonPic.png";
import { useRef } from "react";
import rightArrow from "./rightArrow.png";

const NotesPage = () => {
  const { selecteGroup, setMobileToggle } = useContext(context);
  const noteDateTime = new Date();
  const controlRef = useRef();

  const [noteFromUser, setNoteFromUser] = useState(""); // state to store notes into group
  const localData = JSON.parse(localStorage.getItem("group")); //getting data from local browser

  const groupData = localData?.filter((val) => selecteGroup === val.name); //so that we deal only with the selected group
  controlRef.current = groupData[0];

  // function to handle submit start
  const handleSubmit = (e) => {
    e.preventDefault();

    // getting time format
    const time = `${noteDateTime.getHours()}:${noteDateTime.getMinutes()} ${
      noteDateTime.getHours() > 12 ? "PM" : "AM"
    }`;

    // getting month in string
    const month = noteDateTime.toLocaleString("default", { month: "long" });
    // getting date fomat
    const noteDate = `${noteDateTime.getHours()} ${month} ${noteDateTime.getFullYear()}`;

    // the desired data format I want to push
    const newNote = {
      notes: noteFromUser,
      date: noteDate,
      time: time,
    };

    // updating notes into local storage start
    const browserData = JSON.parse(localStorage.getItem("group"));
    browserData.map(
      (datas) =>
        controlRef.current.name === datas.name && datas.notes.push(newNote)
    );
    localStorage.setItem("group", JSON.stringify(browserData));
    // updating notes into local storage end

    setNoteFromUser(""); //clearing the textarea
  };
  // function to handle submit end

  return (
    <div className={styles.notesContainer}>
      {/* header start */}
      <header className={styles.header}>
        <div
          className={styles.rightArrow}
          onClick={() => setMobileToggle(false)}
        >
          <img src={rightArrow} alt="" />
        </div>
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
        {groupData[0]?.notes.map((noteInfo, idx) => (
          <div className={styles.individualNotes} key={idx}>
            <div className={styles.dateTime}>
              <span>{noteInfo.time}</span>
              <br />
              <span>{noteInfo.date}</span>
            </div>
            <div className={styles.localNotes}>{noteInfo.notes}</div>
          </div>
        ))}
      </div>
      {/* stored notes section end */}

      {/* note taking area start */}
      <div className={styles.noteTakingArea}>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your text here......."
            className={styles.textSection}
            value={noteFromUser}
            onChange={(e) => setNoteFromUser(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
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
