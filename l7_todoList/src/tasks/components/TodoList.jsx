import React, { Component } from 'react';
import TasksList from './TasksList.jsx';
import { createTask, updateTask, deleteTask } from '../tasksGateway.js';
import CreateTaskInput from './CreateTaskInput.jsx';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';
import PropTypes from 'prop-types';
import { tasksListSelector } from '../tasks.selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.onCreate} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskDelete={this.handleTaskDelete}
            handleTaskStatusChange={this.handleTaskStatusChange}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
