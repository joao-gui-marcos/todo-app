import React, { useContext, useState } from 'react';
import './styles.css';
import { FaPlus } from 'react-icons/fa';
import TaskContext from '../../context/taskContext';

function ItemAdd() {
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAdd = async () => {
    if (description.length === 0) {
      alert("Description can't be empty");
      return;
    }
    try {
      await addTask(description);
    } catch (error) {
      if (error.response.status === 409) {
        alert("Task already exists");
      } else {
        console.error(error);
        alert("An error occurred");
      }
    }
  };

  return (
    <div className="item-add">
      <div>
        <label>New Task:</label>
        <input
          value={description}
          onChange={
            ({ target: { value } }) => setDescription(value)
          }
        />
      </div>
      <button
        onClick={handleAdd}
      ><FaPlus /></button>
    </div>
  );
}

export default ItemAdd;
