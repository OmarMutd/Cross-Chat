import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import SignInPage from './SignInPage/SignInPage'
import ChatPage from './ChatPage/ChatPage'


// import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    // <ErrorBoundary>
      <div className="App">

       <Route exact path='/' component={LandingPage}/>
       <Route exact path='/SignInPage' component={SignInPage}/>
       <Route exact path='/ChatPage' component={ChatPage}/>

      </div>
    // </ErrorBoundary>
    
  );
}

export default App;
