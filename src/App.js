import React from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import * as authActions from './actions/auth';
import { FirestoreProvider} from 'react-firestore';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { firebase } from './firebase';
import Authenticated from './authenticated';
import Unauthenticated from './unauthenticated'

function App() {
  const [ cookies, setCookie, removeCookie ] = useCookies(['auth']);

  const logout = () => {
    removeCookie('auth');
    authActions.logout();
  };

  const login = async () => {
      const googleUser = await authActions.login();
      setCookie('auth', {
        authenticated: true,
        user: googleUser
      })
  }

  const { auth = {} } = cookies;
  const { authenticated, user } = auth;

  if (authenticated) {
    return(
      <CookiesProvider>
        <FirestoreProvider firebase={firebase}>
          <CssBaseline>
            <Container fixed>
              <Authenticated user={user} logout={logout}/>
            </Container>
          </CssBaseline>
        </FirestoreProvider>
      </CookiesProvider>
    )
  }

  return(
    <CookiesProvider>
      <CssBaseline>
        <Container fixed>
          <Unauthenticated login={login} />
        </Container>
      </CssBaseline>
    </CookiesProvider>

  )
}

export default App;
