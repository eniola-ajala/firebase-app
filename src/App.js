import logo from './logo.svg';
import './App.css';
import Top from './components/top'
import Lannding from './components/landing'
import Landing from './components/landing';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './components/signup';
import Signin from './components/signin'
import Dashboard from './components/dashboard/home'

import {auth, firestore} from './config/firebase'
import React, {useEffect, useState} from 'react'
import Profile from './components/dashboard/profile'

function App() {
  const [user, setUser] = useState('')
  useEffect(()=>{
    auth.onAuthStateChanged(async (userData)=>{
      if(userData){
        const profile = await firestore.collection('users').doc(userData.uid).get();
        if(profile.exists){
          setUser(profile.data().fullname);
          // console.log (profile.data());

        }
      }else{
        setUser('');
      }

    })
  },[])

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('uid')
  }
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'> 
        <Landing/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Signin/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard displayName={user} handleLogout={handleLogout}/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>

      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
