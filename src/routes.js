import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import { useEffect } from "react";


export default function Router() {
  useEffect(() => {
    console.log("Passo 2")
}, [])
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new"  component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
