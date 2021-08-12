import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Navbar from './component/Navbar'


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/Contact" component={Contact} />
         <Route exact path="/About" component={About} />
         <Route exact path="/Project" component={Project} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
