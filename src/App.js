import React from 'react';
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './pages/About';
import Login from '././pages/Login';
import './App.css'
import AdminDashboard from './pages/adminPages/AdminDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid mx-0 px-0'>
        <Switch>
          <Route exact path='/admin' component={Login} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/admin-dashboard' component={AdminDashboard} />
          <Route exact path='/' component={HomePage} />
        </Switch>
        {/* <div className="transparentDiv"></div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
