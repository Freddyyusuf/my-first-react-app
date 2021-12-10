import { Fragment } from "react";
import React from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meal/Meal";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meal/>
      </main>
    </Fragment>
  );
}

export default App;
