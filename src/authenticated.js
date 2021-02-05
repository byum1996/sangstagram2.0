import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
// import Post from './posts/index';
import UserAndLogout from './userAndLogout/index';
import Search from './search/index';
import FollowingFollowers from './followingFollowers/index';
import Profile from './profile/index';
import CenteredTabs from './tabs';

const queryCache = new QueryCache()

const Authenticated = ({logout, user}) => {

  return (
        <Router>
          <ReactQueryCacheProvider queryCache={queryCache}>

            <UserAndLogout user={user} logout={logout}/>
            
            <CenteredTabs/>
            
            <Switch>
              {/* <Route path='/home' exact>
                <Post/>
              </Route> */}
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
        

