import React from 'react';
import homePage from './pages/home/homePage'
import contact from './pages/contact/contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import about from './pages/about/about';
import adminLogin from './pages/admin/auth/adminLogin';
import adminDashboard from './pages/admin/dashboard/adminDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid mx-0 px-0'>
        <Switch>
          <Route exact path='/admin' component={adminLogin} />
          <Route exact path='/contact-us' component={contact} />
          <Route exact path='/about-us' component={about} />
          <Route exact path='/admin-dashboard' component={adminDashboard} />
          <Route exact path='/' component={homePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
