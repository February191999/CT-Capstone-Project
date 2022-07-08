import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import { Home, CatHome, CatPictures, SignIn } from './components';
import './styles.css';
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'


let myTitle = "Home For Cats"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}> 
    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle}/>
        </Route>
        <Route path='/cathome'>
          <CatHome></CatHome>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
        <Route path='/catpictures'>
          <CatPictures></CatPictures>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();