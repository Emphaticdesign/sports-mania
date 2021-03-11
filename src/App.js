
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import LeagueDetail from "./Components/LeagueDetail/LeagueDetail";
import NotFound from "./Components/NotFound/NotFound";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/leagueDetail/:leagueId">
          <LeagueDetail></LeagueDetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
