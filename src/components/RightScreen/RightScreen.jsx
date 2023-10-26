import HomePage from "../../pages/Home/HomePage";
import styles from "./rightscreen.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";
import NotesPage from "../../pages/Notes/NotesPage";

const RightScreen = () => {
  const { toggleHomeNotes } = useContext(context);
  return (
    <div className={styles.RightScreen}>
      {toggleHomeNotes ? <NotesPage /> : <HomePage />}
    </div>
  );
};

export default RightScreen;
