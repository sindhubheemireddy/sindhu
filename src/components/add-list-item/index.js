import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import "./style.css";

export default class AddListItem extends Component {
  state = {
    label: ""
  };

  getTodoLabel(e) {
    const title = e.target.value;
    this.setState(({ label }) => {
      return {
        label: title
      };
    });
  }

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.label) this.props.addListItem(this.state.label);
    this.setState(({ label }) => {
      return {
        label: ""
      };
    });
  };

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.onSubmitForm}>
        <FormControl>
          <InputLabel htmlFor="new-item">Item</InputLabel>
          <Input
            id="new-item"
            aria-describedby="my-helper-text"
            onChange={e => this.getTodoLabel(e)}
            value={this.state.label}
          />
          <FormHelperText id="my-helper-text">Add new item</FormHelperText>
          <Button
            className="btn-submit"
            variant="contained"
            color="primary"
            type="submit"
          >
            Add
          </Button>
        </FormControl>
      </form>
    );
  }
}
