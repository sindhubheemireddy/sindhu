import React from "react";
import TodoItem from "./todo-list-item";
import List from "@material-ui/core/List";

const TodoList = ({ todoData, onDeleted, onToggleDone, onToggleImportant }) => {
  return (
    <List component="ul" aria-label="main mailbox folders">
      {todoData.map(item => {
        const { id, ...itemProps } = item;
        return (
          <TodoItem
            key={id}
            {...itemProps}
            onDeleted={() => {
              onDeleted(id);
            }}
            onToggleDone={() => {
              onToggleDone(id);
            }}
            onToggleImportant={() => {
              onToggleImportant(id);
            }}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
