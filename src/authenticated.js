import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Home from './home/index';
import NavBar from './navBar/index';
import Search from './search/index';
import FollowingFollowers from './followingFollowers/index';
import Profile from './profile/index';

const queryCache = new QueryCache()

const Authenticated = ({logout, user}) => {

  return (
        <Router>
          <ReactQueryCacheProvider queryCache={queryCache}>

            <NavBar user={user} logout={logout}/>
            
            <Switch>
              <Route path='/home' exact>
                <Home/>
              </Route>
              <Route path='/search' exact>
                <Search user={user}/>
              </Route>
              <Route path='/following/followers'>
                <FollowingFollowers user={user}/>
              </Route>
              <Route path='/profile' exact>
                <Profile user={user}/>
              </Route>
            </Switch>
            
          </ReactQueryCacheProvider>
        </Router>
    )
}

export default Authenticated;
        

