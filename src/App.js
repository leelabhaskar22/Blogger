import { useEffect, useState } from 'react';
import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './context/PrivateRoute';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/signin';
import BlogCategory from './components/ForYou/Foryou';
import Blog from './Pages/Blog';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
console.log(currentUser)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])  

  return (
   <AuthProvider value={{currentUser}}>
   <BrowserRouter>
   <Routes>
   <Route element={<PrivateRoute>
    <Home />
    </PrivateRoute>} path='/' />
    <Route element={<PrivateRoute>
    <Blog />
    </PrivateRoute>} path='/blogs' >
      <Route element={<PrivateRoute>
    <Blog />  
    </PrivateRoute>} path=':blogId' />
    </Route>
    <Route path="/signin" element={
            !currentUser?.email 
            ? <Signin />
            : <Navigate to='/' replace/>
          }/>
             <Route path="/signup" element={
            !currentUser?.email 
            ? <Signup />
            : <Navigate to='/' replace/>
          }/>
   </Routes>
   </BrowserRouter>
   </AuthProvider>
  );
} 


export default App;
