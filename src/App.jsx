import { useState } from "react";

import "./App.css";
import GroupForm from "./component/GroupForm";
import GroupList from "./component/GroupList";

function App() {
  const [groupToEdit, setGroupToEdit] = useState(null);
  const [allGroups, setAllGroups] = useState([]);

  const addGroup = (group) => {
    group.id = Date.now();
    group.createdAt = new Date();
    setAllGroups([...allGroups, group]);
  };

  const editGroup = (updatedGroup) => {
    setAllGroups(
      allGroups.map((group) =>
        group.id === updatedGroup.id ? updatedGroup : group
      )
    );
    setGroupToEdit(null);
  };

  const deleteGroup = (id) => {
    setAllGroups(allGroups.filter((group) => group.id !== id));
  };

  return (
    <div className="App">
      <h1>Group Management</h1>
      <GroupForm
        addGroup={addGroup}
        editGroup={editGroup}
        groupToEdit={groupToEdit}
        setGroupToEdit={setGroupToEdit}
      />
      <GroupList
        allGroups={allGroups}
        deleteGroup={deleteGroup}
        editGroup={setGroupToEdit}
      />
    </div>
  );
}

export default App;
