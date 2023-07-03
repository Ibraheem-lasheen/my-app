import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import Drwer from './components/Drwer';
import Layout from './components/Layout';
import AppLayout from './components/AppLayout';
import GameList from './components/GameList';
import FoodList from './components/Food';
import ActivityList from './components/ActivityList';
import Login from './components/Login';

function App() {


  let submit = JSON.parse(localStorage.getItem("submit"))




  return (
      <div className='App'>
          


        <Router>

          <Routes>

           <Route path='/' element={<AppLayout />}>
           <Route path='/login' element={<Login />}/ >

            {(submit === true) && (
              <>
                 <Route path='games' element={<GameList />}/>
                 <Route path='food' element={<FoodList />} />
                <Route path='activites' element={<ActivityList />} />
              </>
            )}

            </Route>

            </Routes>

        </Router>

      </div>
  );
}

export default App;
