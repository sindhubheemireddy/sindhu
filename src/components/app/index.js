import React, { Component } from "react";

import AppHeader from "../app-header";
import AppSearch from "../app-search";
import TodoList from "../todo-list";
import ItemsFilter from "../items-filter";
import AddListItem from "../add-list-item";
import Container from "@material-ui/core/Container";

export default class App extends Component {
  uniqId = 100;
  state = {
    fiterQuery: "all",
    term: "",
    todoData: [
      this.createTodoItem("regristration form"),
      this.createTodoItem("blog"),
      this.createTodoItem("messaging app"),
      this.createTodoItem("wheather app"),
      this.createTodoItem("calculator")
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = this.findListItemIndex(id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newData
      };
    });
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.uniqId++
    };
  }

  addListItem = text => {
    const newListItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newData = [newListItem, ...todoData];

      return {
        todoData: newData
      };
    });
  };

  filterData = query => {
    this.setState(({ fiterQuery }) => {
      return {
        fiterQuery: query
      };
    });
  };

  findListItemIndex(id) {
    return this.state.todoData.findIndex(el => el.id === id);
  }

  toggleProperty(array, id, property) {
    const index = this.findListItemIndex(id);
    const oldItem = array[index];

    const newItem = { ...oldItem, [property]: !oldItem[property] };

    const newData = [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)
    ];

    return newData;
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  filteredData = (array, query, term) => {
    return array.filter(item => {
      if ("all" === query && term.length === 0) {
        return item;
      } else if ("done" === query) {
        return (
          item.done === true &&
          item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        );
      } else {
        return (
          item.done !== true &&
          item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        );
      }
    });
  };

  getTerm = query => {
    this.setState(({ term }) => {
      return {
        term: query
      };
    });
  };

  render() {
    const { todoData, fiterQuery, term } = this.state;
    const filteredTodoData = this.filteredData(todoData, fiterQuery, term);

    const doneCount = todoData.filter(item => item.done === true).length;
    const todoCount = todoData.filter(item => item.done !== true).length;

    return (
      <Container maxWidth="sm">
        <AppHeader todo={todoCount} done={doneCount} />
        <AppSearch getTerm={this.getTerm} />
        <ItemsFilter filterData={this.filterData} />
        <AddListItem addListItem={this.addListItem} />
        <TodoList
          todoData={filteredTodoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </Container>
    );
  }
}
