import React, { useEffect } from 'react';
import './Sass/App.scss'; // Do not remove!
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SplashScreen from './pages/SplashScreen';
import MatchingView from './pages/MatchingView';
import MatchingViewDetail from './pages/MatchingViewDetail';
import ChatDashboard from './pages/ChatDashboard';
import Chat from './pages/Chat';
import EventsDashboard from './pages/EventsDashboard';
import EventDetails from './pages/EventDetails';
import AddEventForm from './pages/AddEventForm';
import SettingsView from './pages/SettingsView';
import EditProfile from './pages/EditProfile';
import { auth, methods } from './utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './app/userAuthSlice';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import apiUserService from './utils/services/apiUserService';
import { RootState } from './app/store';
import { clearAllUsersState, setAllUsersState } from './app/allUsersSlice';
import apiEventService from './utils/services/apiEventsService';
import { clearAllEventsState, setAllEventsState } from './app/allEventsSlice';

function App() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = methods.onAuthStateChanged(auth, async (cred) => {
      if (cred) {
        const res = await apiUserService.getUser(cred.uid);
        dispatch(login(res));
      } else {
        dispatch(logout());
      }
    });
    return isAuth;
  }, [dispatch]);

  useEffect(() => {
    if (userAuth) {
      apiUserService
        .getAllUsers()
        .then((allUsers) => dispatch(setAllUsersState(allUsers)))
        .catch((err) => console.error(err));
    } else {
      dispatch(clearAllUsersState());
    }
  }, [userAuth]);

  useEffect(() => {
    if (userAuth) {
      apiEventService
        .getAllEvents()
        .then((allEvents) => dispatch(setAllEventsState(allEvents)))
        .catch((err) => console.error(err));
    } else {
      dispatch(clearAllEventsState());
    }
  }, [userAuth]);

  return (
    <div className='App'>
      <h1>App</h1>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/matchingView' element={<MatchingView />} />
        <Route path='/matchingViewDetail' element={<MatchingViewDetail />} />
        <Route path='/chatDashboard' element={<ChatDashboard />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/eventsDashboard' element={<EventsDashboard />} />
        <Route path='/eventDetails' element={<EventDetails />} />
        <Route path='/addEventForm' element={<AddEventForm />} />
        <Route path='/settingsView' element={<SettingsView />} />
        <Route path='/editProfile' element={<EditProfile />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
