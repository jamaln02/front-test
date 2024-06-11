import React from "react";
import Group from "./Group";

const GroupList = ({ allGroups, editGroup, deleteGroup }) => {
  return (
    <div>
      {allGroups.map((group) => (
        <Group
          key={group.id}
          group={group}
          editGroup={editGroup}
          deleteGroup={deleteGroup}
        />
      ))}
    </div>
  );
};

export default GroupList;
