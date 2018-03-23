import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const tasks = [
  { id: "Task-1-Buttons" },
  { id: "Task-2-Loader" },
  { id: "Task-3-ThumbList" }
];

tasks.forEach(task => (task.Component = require(`./tasks/${task.id}/index`).default));

const Links = () => (
  <ul className="lesson-nav">
    {tasks.map((task, i) => (
      <li key={task.id}>
        <Link to={`/tasks/${task.id}`}>{task.id}</Link>
      </li>
    ))}
  </ul>
);

const Back = () => (
  <div style={{ marginBottom: 64 }}>
    <Link to="/">&larr;Back to index</Link>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Links} />
          <Route path="/tasks" component={Back} />
          {tasks.map(({ id, Component }) => (
            <Route
              key={id}
              path={`/tasks/${id}`}
              render={({ match }) => {
                return <Component {...match} />;
              }}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
