import React,{Component} from 'react';
import {Provider} from 'react-redux';
import{createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
class App extends Component{
  componentWillMount(){
        const config = {
        apiKey: "AIzaSyDKy1g2uQVAy4e0c4kRe1a4OCpyyBLw-Yk",
        authDomain: "manager-d0632.firebaseapp.com",
        databaseURL: "https://manager-d0632.firebaseio.com",
        projectId: "manager-d0632",
        storageBucket: "manager-d0632.appspot.com",
        messagingSenderId: "421303024609"
      };
      firebase.initializeApp(config);
  }
  render(){
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
      //neu khong co createStore(reducers) bi loi store.getState() is undefined
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}
export default App;
