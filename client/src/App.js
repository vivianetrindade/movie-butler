import './App.css';
import { BrowserRouter, Route, Routes, useNavigate  } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import Info from './pages/Info';
import WatchList from './pages/WatchList';
import PrivateRoute from './components/PrivateRoute';
import { Auth0Provider } from '@auth0/auth0-react'


function App() {

  const Auth0ProviderWithRedirectCallback = ({children, ...props}) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };
    return (
      <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
        {children}
      </Auth0Provider>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
      domain="dev-u9kq7hje.us.auth0.com"
      clientId="3Qu6wTEbtADwKPYf5FvrfkyMjCu7hVgp"
      redirectUri={window.location.origin}
      audience="http://localhost:8080"
      scope="openid profile email"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/info/:id" element={<Info />}></Route>
          <Route path='/wanttowatch' element={<PrivateRoute  component={WatchList}/>}></Route>
        </Routes>
        <Footer />
      </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    </div>
  );
}

export default App;
