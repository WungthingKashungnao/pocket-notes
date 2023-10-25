import { createContext, useEffect } from "react";
import { useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [showPopUP, setShowPopUp] = useState(false); //state for handling popup
  const [groupName, setGroupName] = useState(""); //state to hanlde group name
  const [groupColor, setGroupColor] = useState(""); //state to handel group color
  const [notes, setNotes] = useState([]); //state to handle notes
  const [allGroups, setAllGroups] = useState([]); //state to store all the groups
  const [localData, setLocaData] = useState([]); //state to handle local browser data
  const [selecteGroup, setSelectedGroup] = useState(""); //state for handling selected group name
  const [toggleHomeNotes, setToggleHomeNotes] = useState(false); //state to toggle between home and notes page

  // in this useeffect we are updating localdata
  useEffect(() => {
    const AllGroupsList = JSON.parse(localStorage.getItem("group"));
    setLocaData(AllGroupsList);
  }, [allGroups]);

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
        localData,
        setLocaData,
        selecteGroup,
        setSelectedGroup,
        toggleHomeNotes,
        setToggleHomeNotes,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextApi;
