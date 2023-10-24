import { createContext } from "react";
import { useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [showPopUP, setShowPopUp] = useState(false); //state for handling popup
  const [groupName, setGroupName] = useState(""); //state to hanlde group name
  const [groupColor, setGroupColor] = useState(""); //state to handel group color
  const [notes, setNotes] = useState([]); //state to handle notes
  const [allGroups, setAllGroups] = useState([]); //state to store all the groups
  return (
    <context.Provider
      value={{
        showPopUP,
        setShowPopUp,
        groupName,
        setGroupName,
        groupColor,
        setGroupColor,
        notes,
        setNotes,
        allGroups,
        setAllGroups,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextApi;
