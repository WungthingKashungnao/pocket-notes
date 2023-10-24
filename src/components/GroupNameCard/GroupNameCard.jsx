import { useContext } from "react";
import styles from "./groupnamecard.module.css";
import { context } from "../../context/ContextApi";

const GroupNameCard = ({ name, color }) => {
  const { selecteGroup, setSelectedGroup } = useContext(context);
  return (
    <div
      className={styles.container}
      onClick={() => setSelectedGroup(name)}
      style={{
        backgroundColor: `${name === selecteGroup ? "#F7ECDC" : "white"} `,
      }}
    >
      <div className={styles.roundedName} style={{ backgroundColor: color }}>
        {name.length > 2 ? name.slice(0, 2).toUpperCase() : name.toUpperCase()}
      </div>
      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default GroupNameCard;
