import { useContext } from "react";
import styles from "./app.module.css";
import LeftScreen from "./components/LeftScreen/LeftScreen";
import PopUpCreate from "./components/PopUpCreate/PopUpCreate";
import RightScreen from "./components/RightScreen/RightScreen";

function App() {
  return (
    <div className={styles.App}>
      <LeftScreen />
      <RightScreen />
      <PopUpCreate />
    </div>
  );
}

export default App;
