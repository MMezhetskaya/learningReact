import React from 'react';

let TaskList = ({ tasklist, editLi, deleteLi, editable, onChangeInput, submitLi }) => {
  return(
    <ul>
      {
        tasklist.map((item) => {
          let innerValue = item.value;
          let editButton = <button className="edit" onClick={editLi}>Edit</button>;

          if(editable === item.id) {
            innerValue = <input defaultValue={item.value} onChange={onChangeInput} />
            editButton = <button className="submit" onClick={submitLi}>Submit</button>;
          }

          return (
            <li
              key={item.id}
              id={item.id}
            >
              <span>{innerValue}</span>
              {editButton}
              <button className="delete" onClick={deleteLi}>Delete</button>
            </li>
          )
        })
      }
    </ul>
  );
}

export default TaskList;