import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignInPage from '../SignInPage/SignInPage';
import ChatPage from '../ChatPage/ChatPage';
import PageDoesNotExist from '../PageDoesNotExist/PageDoesNotExist';
import CreateAnAccount from '../CreateAnAccount/CreateAnAccount';
import ManageAccount from '../ManageAccount/ManageAccount';
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import ChangePassword from '../ChangePassword/ChangePassword';
import { ErrorBoundary } from '../ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
      <div className='App'>
       <Switch>
       <Route exact path='/' component={LandingPage} />
       <Route path='/SignInPage' component={SignInPage} />
       <Route path='/ChatPage' component={ChatPage} />
     
       <Route path='/CreateAnAccount' component={CreateAnAccount} />
      
       <Route path='/ManageAccount' component={ManageAccount} />
       <Route path='/DeleteAccount' component={DeleteAccount} />
       <Route path='/ChangePassword' component={ChangePassword} />
       <Route component={PageDoesNotExist} />
       </Switch>
      </div>
     </ErrorBoundary>
    
  );
}

export default App;
