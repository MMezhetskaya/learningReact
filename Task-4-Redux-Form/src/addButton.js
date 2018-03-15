import React from 'react';

let AddButton = ({ onClick, form, formSubmit, onChangeInput, inputValue, formCancel }) => {
  if(!form) {
    return <button className="newtask" onClick={onClick}>New Task</button>
  } else {
    return(
      <form>
        <input 
          value={inputValue}
          ref={(input) => {this.trackInput = input} }
          onChange={onChangeInput}
          placeholder="New Task" />
        <button className="submit" onClick={formSubmit}>Add Task</button>
        <button className="cancel" onClick={formCancel}>Cancel</button>
      </form>
    )
  }
}

export default AddButton;