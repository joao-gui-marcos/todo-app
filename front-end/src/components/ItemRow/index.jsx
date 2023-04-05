import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import './styles.css';
import { FaEdit, FaCheck, FaRegWindowClose } from 'react-icons/fa';
import TaskContext from '../../context/taskContext';

function ItemRow({ index, id, description, check }) {
  const [editMode, setEditMode] = useState(false)
  const [inputDescription, setInputDescription] = useState(description);

  const { putTask, rmTask } = useContext(TaskContext);

  const editHandle = ({ target: { value } }) =>
    setInputDescription(value);

  const editSave = async () => putTask(id, inputDescription, check);

  const changeCheck = async ({ target: { checked } }) => putTask(id, description, checked);

  return (
    <>
      <div className="item-row">
        {editMode ?
          (
            <>
              <div className="item-row-desc">
                <input
                  value={inputDescription}
                  onChange={editHandle}
                />
              </div>
              <div>
                <button
                  style={{ marginRight: '5px' }}
                  onClick={editSave}
                ><FaCheck /></button>
                <button
                  onClick={() => setEditMode(false)}
                ><FaRegWindowClose /></button>
              </div>
            </>
          ) :
          (
            <>
              <input
                type="checkbox"
                id="scales"
                name="scales"
                defaultChecked={check}
                onChange={changeCheck}
              />
              <div
                className={clsx("item-row-desc", check && "item-row-desc-check")}
              >{description}</div>
              <div style={{ width: '66px' }}>
                <button
                  style={{ marginRight: '5px' }}
                  onClick={() => setEditMode(true)}
                ><FaEdit /></button>
                <button
                  onClick={() => rmTask(id)}
                ><FaRegWindowClose /></button>
              </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default ItemRow;
