import styles from "./notes.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";

const NotesPage = () => {
  const { selecteGroup } = useContext(context);
  const localData = JSON.parse(localStorage.getItem("group"));
  const groupData = localData.filter((val) => selecteGroup === val.name);

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

      {/* note taking area start */}
      <div className={styles.noteTakingArea}>
        <form>
          <textarea
            placeholder="Enter your text here..."
            className={styles.textSection}
          ></textarea>
        </form>
      </div>
      {/* note taking area start */}
      {console.log(localData.filter((val) => selecteGroup === val.name))}
    </div>
  );
};

export default NotesPage;
