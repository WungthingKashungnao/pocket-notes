import styles from "./notes.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";

const NotesPage = () => {
  const localData = JSON.parse(localStorage.getItem("group"));
  const { selecteGroup } = useContext(context);
  return (
    <div className={styles.notesContainer}>
      {console.log(localData.filter((val) => selecteGroup === val.name))}
    </div>
  );
};

export default NotesPage;
