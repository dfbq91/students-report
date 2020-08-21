import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import BasicReport from "./pages/BasicReport";
import Report from "./pages/Report";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Layout>
        <Switch>

          <BasicReport exact path="/" component={BasicReport} />
          <Route exact path="/reporte" component={Report} />

        </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

const studentsData = [
  {
    code: 1,
    name: "Diego",
    lastname: "Betancourt",
    segment: "Técnico",
    entryDate: "2020-07-16",
  },
  {
    code: 2,
    name: "Juan",
    lastname: "Loyola",
    segment: "Bachillerato",
    entryDate: "2020-01-10",
  },
  {
    code: 3,
    name: "Felipe",
    lastname: "Sanclemente",
    segment: "Inglés",
    entryDate: "2019-07-02",
  },
  {
    code: 4,
    name: "Diego",
    lastname: "Betancourt",
    segment: "Inglés",
    entryDate: "2020-07-16",
  },
  {
    code: 5,
    name: "Diego",
    lastname: "Betancourt",
    segment: "Técnico",
    entryDate: "2020-07-16",
  },
  {
    code: 6,
    name: "Patricia",
    lastname: "Castro",
    segment: "Técnico",
    entryDate: "2020-02-13",
  },
  {
    code: 7,
    name: "Diana",
    lastname: "Figueroa",
    segment: "Bachillerato",
    entryDate: "2020-12-11",
  },
  {
    code: 8,
    name: "Lina",
    lastname: "Moreno",
    segment: "Inglés",
    entryDate: "2020-07-16",
  },
];

export default App;
