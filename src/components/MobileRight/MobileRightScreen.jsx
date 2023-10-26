import HomePage from "../../pages/Home/HomePage";
import styles from "./mobilerightscreen.module.css";
import { context } from "../../context/ContextApi";
import { useContext } from "react";
import NotesPage from "../../pages/Notes/NotesPage";

const MobileRightScreen = () => {
  const { toggleHomeNotes, mobileToggle } = useContext(context);
  return (
    <div
      className={styles.RightScreen}
      style={{ display: `${mobileToggle ? "block" : ""}` }}
    >
      {toggleHomeNotes ? <NotesPage /> : <HomePage />}
    </div>
  );
};

export default MobileRightScreen;
