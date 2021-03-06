import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Discovery from './components/pages/Discovery';
import Search from './components/pages/Search';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discovery} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
