import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import Login from './components/Cart/Login/Login';
import Breakfast from './components/Foods/Breakfast';
import Dinner from './components/Foods/Dinner';
import Foods from './components/Foods/Foods';
import Lunch from './components/Foods/Lunch';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/foods' element={<Foods></Foods>}>
          <Route path=':breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path=':lunch' element={<Lunch></Lunch>}></Route>
          <Route path=':dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
    </div >
  );
}

export default App;
