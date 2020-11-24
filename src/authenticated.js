import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import SearchUser from './searchUser';
import Post from './posts/index';
import UserAndLogout from './userAndLogout';
import CenteredTabs from './tab';

const queryCache = new QueryCache()

const Authenticated = ({logout, user}) => {

  return (
        <Router>
          <ReactQueryCacheProvider queryCache={queryCache}>
            
            <CenteredTabs/>
            
            <UserAndLogout user={user} logout={logout}/>
            
            <Switch>
              <Route path='/home' exact component={Post} />
              <Route path='/search' exact component={SearchUser} />
            </Switch>
            
          </ReactQueryCacheProvider>
        </Router>
    )
}

export default Authenticated;
        

