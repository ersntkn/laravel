import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import News from "./pages/News";
import AddNews from "./pages/AddNews";
import EditNews from "./pages/EditNews";
import ShowNews from "./pages/ShowNews";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/add-news" component={AddNews} />
        <Route path="/edit-news/:id" component={EditNews} />
        <Route path="/show-news" component={ShowNews} />
      </Switch>
    </Router>
  );
}

export default App;
