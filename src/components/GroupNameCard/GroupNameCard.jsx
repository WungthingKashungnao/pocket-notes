import { useContext } from "react";
import styles from "./groupnamecard.module.css";
import { context } from "../../context/ContextApi";

const GroupNameCard = ({ data }) => {
  const { selecteGroup, setSelectedGroup } = useContext(context);
  return (
    <div
      className={styles.container}
      onClick={() => setSelectedGroup(data.name)}
      style={{
        backgroundColor: `${data.name === selecteGroup ? "#F7ECDC" : "white"} `,
      }}
    >
      <div
        className={styles.roundedName}
        style={{ backgroundColor: data.color }}
      >
        {data.name?.length > 2
          ? data.name.slice(0, 2).toUpperCase()
          : data.name.toUpperCase()}
      </div>
      <p className={styles.fullGroupName}>{data.name}</p>
    </div>
  );
};

export default GroupNameCard;
