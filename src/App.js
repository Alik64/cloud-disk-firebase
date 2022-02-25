import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import SignUpModal from './Components/Modal/SignUpModal';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="app_wrapper">
      <SignUpModal />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
