import React from 'react';
import { connect } from 'react-redux';
import TaskList from './taskList';
import AddButton from './addButton';


class App extends React.Component {
  state = {
    addFormStatus: false,
    input: "",
    liEditable: false,
    temp: ""
  }

  handleAddButton(event) {
    event.preventDefault();

    this.setState({
      addFormStatus: true
    });
  }

  handleForm(event, action) {
    event.preventDefault();

    if(action === "submit") {
      if(this.state.input) {
        this.props.addForm(this.state.input);
        this.setState({
          input: ""
        });
      }
    } else if(action === "cancel") {
      this.setState({
        addFormStatus: false
      });
    }
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleLiEdit(event) {
    event.preventDefault();

    if(event.target.id !== this.state.liEditable.id) {
      this.setState({
        liEditable: {
          id: event.target.parentNode.id,
          tempValue: event.target.previousSibling.firstChild.data,
        }
      });
    }
  }

  handleInputChange(event) {
      this.setState({
        temp: event.target.value
      });
  }

  handleInputEdit(event) {
    event.preventDefault();

    if(this.state.temp) {
      this.props.editForm(this.state.temp, this.state.liEditable.id);
    }

    this.setState({
      liEditable: false,
      temp: ""
    });
  }

  handleLiDelete(event) {
    event.preventDefault();

    this.props.deleteForm(event.target.parentNode.id);
  }

  render() {
    return (
      <div>
        <AddButton
          onClick={this.handleAddButton.bind(this)}
          form={this.state.addFormStatus}
          formSubmit={(event) => this.handleForm(event, "submit")}
          formCancel={(event) => this.handleForm(event, "cancel")}
          onChangeInput={this.handleInput.bind(this)}
          inputValue={this.state.input} />

        <TaskList
          tasklist={this.props.tasklist}
          editLi={this.handleLiEdit.bind(this)}
          deleteLi={this.handleLiDelete.bind(this)}
          editable={this.state.liEditable.id}
          submitLi={this.handleInputEdit.bind(this)}
          onChangeInput={this.handleInputChange.bind(this)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addForm: newItem =>
    dispatch({
      type: "ADD_TASK",
      payload: {
        value: newItem,
        id: Date.now().toString()
      }
    }),
  editForm: (editItem, editItemId) =>
    dispatch({
      type: "EDIT_TASK",
      payload: {
        value: editItem,
        id: editItemId
      }
    }),
  deleteForm: deleteItemId =>
    dispatch({
      type: "DELETE_TASK",
      payload: {
        id: deleteItemId
      }
    }),
});

export default connect(
  state => ({
    tasklist: state
  }),
  mapDispatchToProps
)(App);