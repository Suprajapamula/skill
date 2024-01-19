import React from "react";
import { UserContext } from "./App";

function ComponentC() {
  return (
    <div>
      <h1>Hello ComponentC</h1>
        <UserContext.Consumer>
          {(value)=><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC