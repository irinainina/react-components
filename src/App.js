import React from 'react';
import Header from './components/Header/Header';
import CommonPage from './containers/CommonPage/CommonPage';
import PersonalPage from './containers/PersonalPage/PersonalPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" component={CommonPage} exact/>
        <Route path="/personalpage" 
               render={(props) => <PersonalPage person={0}/>} 
               exact/>
      </div>
    </Router>
  );
}

export default App;
