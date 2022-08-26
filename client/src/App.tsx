import React, { useEffect } from 'react';
import './Css/components/App.css';
import { Routes, Route } from 'react-router-dom';
import { auth, methods } from './utils/auth/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './app/userAuthSlice';
import Navbar from './components/Navbar';
import apiUserService from './utils/services/apiUserService';
import { RootState } from './app/store';
import apiEventService from './utils/services/apiEventsService';
import { clearAllEventsState, setAllEventsState } from './app/allEventsSlice';
import { useAppSelector } from './app/hooks';
import LoginRegister from './pages/LoginRegister';
import HeaderBar from './components/HeaderBar';
import { setUnSwipedUsersState } from './app/unSwipedUsersSlice';
import { setMatchedUsersState } from './app/matchedUsersSlice';
import {
  SplashScreen,
  MatchingView,
  ChatDashboard,
  Chat,
  EventsDashboard,
  EventDetails,
  AddEventForm,
  EditEventForm,
  SettingsView,
  EditProfile,
  UserProfile,
  Login,
  Register,
  MatchingViewDetail,
} from './pages/index';

function App() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
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
  }, []);

  useEffect(() => {
    const setUnswippedUsers = () => {
      if (userAuth) {
        apiUserService
          .getUnSwipedUsers(userAuth.userId)
          .then((allUsers) => dispatch(setUnSwipedUsersState(allUsers)))
          .catch((err) => console.error(err));
      }
    };
    setUnswippedUsers();
  }, [userAuth?.userId]);

  useEffect(() => {
    const setMatchedUsersAndEvents = () => {
      if (userAuth) {
        apiUserService
          .getMatchedUsers(userAuth.userId)
          .then((allUsers) => dispatch(setMatchedUsersState(allUsers)))
          .catch((err) => console.error(err));
        apiEventService
          .getAllEvents(userAuth.userId)
          .then((allEvents) => dispatch(setAllEventsState(allEvents)))
          .catch((err) => console.error(err));
      } else {
        dispatch(clearAllEventsState());
      }
    };
    setMatchedUsersAndEvents();
  }, [userAuth]);

  return (
    <div className='App'>
      <HeaderBar />
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loginRegister' element={<LoginRegister />} />
        <Route path='/matchingView' element={<MatchingView />} />
        <Route path='/chatDashboard' element={<ChatDashboard />} />
        <Route path='/chat/:roomId' element={<Chat />} />
        <Route path='/eventsDashboard' element={<EventsDashboard />} />
        <Route path='/eventDetails/:eventId' element={<EventDetails />} />
        <Route path='/addEventForm' element={<AddEventForm />} />
        <Route path='/editEvent/:eventId' element={<EditEventForm />} />
        <Route path='/settingsView' element={<SettingsView />} />
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
