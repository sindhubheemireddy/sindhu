import React from "react";

const AppHeader = ({ todo, done }) => {
  return (
    <>
      <h1>Typical ToDo List</h1>
      <h2>
        {todo} more todo, {done} done
      </h2>
    </>
  );
};

export default AppHeader;
