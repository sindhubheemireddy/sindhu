import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class AppSearch extends Component {
  render() {
    return (
      <TextField
        onChange={e => {
          this.props.getTerm(e.target.value);
        }}
        id="standard-basic"
        label="search"
      />
    );
  }
}

export default AppSearch;
