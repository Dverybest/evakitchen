import React from 'react';
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid mx-0 px-0'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
        {/* <div className="transparentDiv"></div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
