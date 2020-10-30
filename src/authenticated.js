import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import Post from './posts/index';
import NavDrawer from './navDrawer';
import UserAndLogout from './userAndLogout';

const queryCache = new QueryCache()

const Authenticated = ({logout, user, addUser}) => {

  return (
        <ReactQueryCacheProvider queryCache={queryCache}>
          <NavDrawer/>
          <UserAndLogout user={user} logout={logout}/>
          <Post/>
        </ReactQueryCacheProvider>
    )
}

export default Authenticated;
        

