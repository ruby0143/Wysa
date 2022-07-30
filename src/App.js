import React from "react";
import Login from "./Login/Login";
import Chat from "./Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
