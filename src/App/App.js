import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage'
import SignInPage from '../SignInPage/SignInPage'
import ChatPage from '../ChatPage/ChatPage'
import PageDoesNotExist from '../PageDoesNotExist/PageDoesNotExist'
import CreateAnAccount from '../CreateAnAccount/CreateAnAccount'


// import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    // <ErrorBoundary>
      <div className="App">
       <Switch>
       <Route exact path='/' component={LandingPage}/>
       <Route exact path='/SignInPage' component={SignInPage}/>
       <Route exact path='/ChatPage' component={ChatPage}/>
       <Route exact path='/CreateAnAccount' component={CreateAnAccount}/>
       <Route component={PageDoesNotExist}/>
       </Switch>
      </div>
    // </ErrorBoundary>
    
  );
}

export default App;
