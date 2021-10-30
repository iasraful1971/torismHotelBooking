
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Affiliate from './components/Affiliate/Affiliate';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import PersonDetails from './components/PersonDetails/PersonDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Allservice from './components/Services/AllService/Allservice';
import DetailsofService from './components/Services/DetailsofService/DetailsofService';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
         <Switch>
           <Route exact path="/">
                <Home></Home>
           </Route>
           <Route  path="/home">
                <Home></Home>
           </Route>
           <Route path="/login">
              <Login></Login>
           </Route>
      
            <PrivateRoute path="/affiliate">
              <Affiliate></Affiliate>
            </PrivateRoute>
            <Route path="/allservices">
              <Allservice></Allservice>
            </Route>
            <PrivateRoute path="/person-info">
            <PersonDetails></PersonDetails>
            </PrivateRoute>
            
            <PrivateRoute path="/service-details/:serviceId">
              <DetailsofService></DetailsofService>
            </PrivateRoute>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
         </Switch>
        
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
