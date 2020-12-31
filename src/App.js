import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home       from './pages/home/home.page'
import Login      from './pages/login/login.page'
import Dashboard  from './pages/dasboard/dashboard.page'

import Navbar     from './components/navbar/navbar.component'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
