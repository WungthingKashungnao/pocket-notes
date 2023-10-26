import styles from "./app.module.css";
import LeftScreen from "./components/LeftScreen/LeftScreen";
import PopUpCreate from "./components/PopUpCreate/PopUpCreate";
import RightScreen from "./components/RightScreen/RightScreen";

import MobileLeftScreen from "./components/MobileLeft/MobileLeftScreen";
import MobileRightScreen from "./components/MobileRight/MobileRightScreen";
function App() {
  return (
    <div className={styles.App}>
      <LeftScreen />
      <RightScreen />

      {/* mobile view start*/}
      <MobileLeftScreen />
      <MobileRightScreen />
      {/* mobile view end */}
      <PopUpCreate />
    </div>
  );
}

export default App;
