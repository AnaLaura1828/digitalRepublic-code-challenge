import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/cadastro" component={ Cadastro } />
          <Route exact path="/profile/:id" component={ Profile } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
