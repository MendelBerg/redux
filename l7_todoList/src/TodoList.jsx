import React, { Component } from 'react';
import TasksList from './TasksList.jsx';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway.js';
import CreateTaskInput from './CreateTaskInput.jsx';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({ tasks: tasksList });
    });
  };

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
            tasks={this.state.tasks}
            handleTaskDelete={this.handleTaskDelete}
            handleTaskStatusChange={this.handleTaskStatusChange}
          />
        </main>
      </>
    );
  }
}

export default TodoList;
