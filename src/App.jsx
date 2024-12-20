import './App.css'
import { useEffect } from 'react';
import Aos from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ComponentWraper from './components/layout/ComponentWraper';
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register';
import NotFound from './components/layout/NotFound';
import Assestant from './pages/Assestant';
import Students from './pages/Students';
import Finance from './pages/Finance';
import Profile from './pages/Profile';
import Classes from './pages/Classes';
import Groups from './pages/Groups';
import Statistics from './pages/Statistics';
import GroupStudents from './pages/GroupStudents';



function App() {
  // animation on scroll initioation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={
              <ComponentWraper>
                <Profile />
              </ComponentWraper>
            }
            />
            <Route path='statistics' element={
              <ComponentWraper>
                <Statistics />
              </ComponentWraper>
            }
            />
            <Route path='classes' element={
              <ComponentWraper>
                <Classes />
              </ComponentWraper>
            }
            />
            <Route path='classes/:classId/groups' element={
              <ComponentWraper>
                <Groups />
              </ComponentWraper>
            }
            />
            <Route path='classes/:classId/groups/:groupId/students' element={
              <ComponentWraper>
                <GroupStudents />
              </ComponentWraper>
            }
            />
            <Route path='assestant' element={
              <ComponentWraper>
                <Assestant />
              </ComponentWraper>
            }
            />
            <Route path='students' element={
              <ComponentWraper>
                <Students />
              </ComponentWraper>
            }
            />
            <Route path='finance' element={
              <ComponentWraper>
                <Finance />
              </ComponentWraper>
            }
            />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
