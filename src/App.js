import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase-config';

import './App.css';
import LoginModal from './Components/Modal/LoginModal';
import SignUpModal from './Components/Modal/SignUpModal';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';



import { setUser, toggleLoading } from './redux/userReducer';
import Loader from './Components/Loader/Loader';
import PrivateHome from './Pages/Private/PrivateHome';
import Private from './Pages/Private/Private';

function App() {
  const dispatch = useDispatch()
  const loadingData = useSelector(state => state.user.loadingData)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser))
      dispatch(toggleLoading(false))
    })
    return unsubscribe
  }, [dispatch])


  return (

    <>
      <SignUpModal />
      <LoginModal />
      <Navbar />
      {!loadingData
        ? <div className="app_wrapper">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/private' element={<Private />} >
              <Route path='/private/private-home' element={<PrivateHome />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
        : <Loader />}
    </>

  )
    ;
}

export default App;
