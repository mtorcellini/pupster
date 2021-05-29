import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={About} />
      </div>
    </Router>


  );
}

export default App;
