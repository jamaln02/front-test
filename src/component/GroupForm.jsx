import React, { useEffect, useState } from "react";

const GroupForm = ({ addGroup, editGroup, groupToEdit, setGroupToEdit }) => {
  const [group, setGroup] = useState({ name: "", description: "" });

  useEffect(() => {
    if (groupToEdit) {
      setGroup(groupToEdit);
    } else {
      setGroup({ name: "", description: "" });
    }
  }, [groupToEdit]);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (groupToEdit) {
      editGroup(group);
    } else {
      addGroup(group);
    }
    setGroup({ name: "", description: "" });
    setGroupToEdit(null);
  };
  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            value={group.name}
            onChange={(e) => setGroup({ ...group, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Description : </label>
          <input
            type="text"
            value={group.description}
            onChange={(e) =>
              setGroup({ ...group, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <button type="submit">
            {groupToEdit ? "Update Group" : "Add Group"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GroupForm;
