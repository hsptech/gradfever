import React from "react";
import Header from "./components/Header";
import SampleSop from "./components/SampleSop/SampleSop";
import CreateSop from "./components/CreateSop/CreateSop";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Sop from "./components/Sop/Sop";
import EachCategory from "./components/EachCategory/EachCategory";
const AppContainer = styled.div`
  padding: 0 1rem;
`;
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppContainer>
          <Switch>
            <Route path="/sop">
              <Sop />
            </Route>
            <Route path="/sampleSop">
              <SampleSop />
            </Route>
            <Route path="/createSop">
              <CreateSop />
            </Route>
            <Route path="/eachCategory">
              <EachCategory />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
