import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Post from "./page/post";
import DashboardList from "./page/dashboard/dashboardList";
import DashboardDetail from "./page/dashboard/dashboardDetail";
import Setting from "./page/setting";
import { useState } from "react";

function App() {
  console.log(window.location.pathname);

  const [key, setKey] = useState(window.location.pathname.split("/")[1])

  const checkAtive = (keyItem) => {
    if (keyItem === key) {
      return { color : "black", backgroundColor: 'white' }
    }
  }

  const onClick = (key) => {
    setKey(key)
  }

  return (
    <div className="App">
      <Router>
        <nav className="App-header">
          <Link className="App-link" to="/dashboard" style={{ padding: 5, ...checkAtive("dashboard")}} onClick={() => {onClick("dashboard")}}>
            Dashboard
          </Link>
          <Link className="App-link" to="/post" style={{ padding: 5, ...checkAtive("post") }} onClick={() => {onClick("post")}}>
            Post Management
          </Link>
          <Link className="App-link" to="/setting" style={{ padding: 5, ...checkAtive("setting")  }} onClick={() => {onClick("setting")}}>Setting</Link>
        </nav>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardList />}>
              <Route
                path="subcription-dashboard"
                element={<DashboardDetail />}
              />
              <Route path="revenue-dashboard" element={<DashboardDetail />} />
            </Route>
          </Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
