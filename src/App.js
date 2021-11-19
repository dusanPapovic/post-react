import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import AddPost from "./pages/AddPost";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div>
    <Router>
      <nav className="navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/posts">
          <AppPosts />
        </Route>
        <Route exact path="/add">
          <AddPost />
        </Route>
        <Route exact path="/post/:id">
            <SinglePost />
        </Route>
        <Route exact path="/edit/:id">
          <AddPost />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
