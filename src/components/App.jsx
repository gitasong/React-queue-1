import React from "react";
import Header from "./Header";
import Queue from "./Queue";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Queue} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Queue/>
    </div>
  );
}

export default App;
