import React, { Component } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import Button from "@material-ui/core/Button";
import "./style.css";

class TodoItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important
    } = this.props;

    let classes = done ? "done" : "";
    if (important) {
      classes += " important";
    }

    return (
      <ListItem role={undefined} className={classes}>
        <ListItemIcon>
          <Checkbox
            checked={done}
            edge="start"
            tabIndex={-1}
            disableRipple
            onChange={onToggleDone}
          />
        </ListItemIcon>
        <ListItemText className="label" primary={label} />
        <ListItemIcon>
          <Button variant="contained" color="secondary" onClick={onDeleted}>
            <DeleteIcon />
          </Button>
        </ListItemIcon>
        <ListItemIcon>
          <Button
            variant="contained"
            color="primary"
            onClick={onToggleImportant}
          >
            <PriorityHighIcon />
          </Button>
        </ListItemIcon>
      </ListItem>
    );
  }
}

export default TodoItem;
