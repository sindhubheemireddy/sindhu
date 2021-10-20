import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./style.css";

class ItemsFilter extends Component {
  render() {
    const { filterData } = this.props;

    return (
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          onClick={() => {
            filterData("all");
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            filterData("done");
          }}
        >
          Done
        </Button>
        <Button
          onClick={() => {
            filterData("active");
          }}
        >
          Active
        </Button>
      </ButtonGroup>
    );
  }
}

export default ItemsFilter;
