import React , {useState} from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import * as auth from './actions/auth';
import { FirestoreProvider} from 'react-firestore';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { firebase } from './firebase';
import Authenticated from './authenticated';
import Unauthenticated from './unauthenticated'

function App() {
  const [ user, setUser ] = useState(null);
  const [authError, setAuthError ] = useState(null);
  const [ cookies, setCookie, removeCookie ] = useCookies(['authenticated', 'user']);

  const logout = () => {
    setUser(null);
    removeCookie('authenticated')
    auth.logout();
  };

  const login = () => {
    auth.login()
      .then(user => {
        setUser(user);
        setCookie('authenticated', true)
        setCookie('user', user)
        setAuthError(null)
      })
      .catch(error => {
        setUser(null);
        setAuthError(error);
      })
  }

  console.log('cookies', cookies)

  if (cookies.authenticated || user) {
    console.log('user', user);
    return(
      <CookiesProvider>
      <FirestoreProvider firebase={firebase}>
        <CssBaseline>
          <Container fixed>
            <Authenticated cookies={cookies} logout={logout}/>
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
          <Unauthenticated login={login} authError={authError}/>
        </Container>
      </CssBaseline>
    </CookiesProvider>

  )
  
  
  
}

export default App;
