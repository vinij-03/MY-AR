import Routes from './Routes';
import axios from 'axios';
import { UserContextProvider } from './UserContext'
import AppPage from './Pages/ARComp';


function App() {

  axios.defaults.baseURL = 'http://localhost:3000';

  axios.defaults.withCredentials = true;

  return (
    <>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
      <AppPage />
    </>
  )
}

export default App