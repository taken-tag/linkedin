import  React, {useEffect} from 'react';
import './app.css';
import Header from './Header';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import {useDispatch, useSelector} from "react-redux"
import {logout, login, selectUser } from './features/userSlice';
import Login from "./Login"
import { auth } from './firebase';
import Widgets from './Widgets'

function App() {
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
     auth.onAuthStateChanged(userAuth =>{
       if(userAuth){
        // user login
        dispatch(
          login({
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,
           photoUrl: userAuth.photoUrl,

        }))
       }else{
        //  user loged out
        dispatch(logout())
       }
     })
  }, [])

  
  return (
    <div className="app">     
     <Header/>
        
     {!user ? <Login/> : (
      <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
     )}
     </div>
  )
}

export default App;
