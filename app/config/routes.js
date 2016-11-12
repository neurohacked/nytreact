
// Inclue the React library
import React from 'react'

// Include the Router and IndexRoute (catch-all route)
import Router, { Route, IndexRoute } from 'react-router';

// Reference the high-level components
import Main from '../components/Main';
import Search from '../components/Search';
import Saved from '../components/Saved';


// Export the Routes
module.exports = (

  /* High level component is the Main component */
  <Route path='/' component={Main}>

    {/* If user selects Search or Saved show the appropriate component*/}
    <Route path='Search' component={Search} />
    <Route path='Saved' component={Saved} />

    {/*If user selects any other path... we get the Home Route*/}
    <IndexRoute component={Search} />

  </Route>

);
