import { useContext } from "react";
import styles from "./app.module.css";
import LeftScreen from "./components/LeftScreen/LeftScreen";
import PopUpCreate from "./components/PopUpCreate/PopUpCreate";
import RightScreen from "./components/RightScreen/RightScreen";
import { context } from "./context/ContextApi";

function App() {
  const { showPopUP } = useContext(context);
  return (
    <div className={styles.App}>
      <LeftScreen />
      <RightScreen />
      {showPopUP ? <PopUpCreate /> : ""}
    </div>
  );
}

export default App;
