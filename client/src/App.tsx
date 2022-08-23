import React, { useEffect } from 'react';
import './Sass/components/App.scss';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import MatchingView from './pages/MatchingView';
import ChatDashboard from './pages/ChatDashboard';
import Chat from './pages/Chat';
import EventsDashboard from './pages/EventsDashboard';
import EventDetails from './pages/EventDetails';
import AddEventForm from './pages/AddEventForm';
import EditEventForm from './pages/EditEventForm';
import SettingsView from './pages/SettingsView';
import EditProfile from './pages/EditProfile';
import UserProfile from './pages/UserProfile';
import { auth, methods } from './utils/auth/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './app/userAuthSlice';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import apiUserService from './utils/services/apiUserService';
import { RootState } from './app/store';
import { clearAllUsersState, setAllUsersState } from './app/allUsersSlice';
import apiEventService from './utils/services/apiEventsService';
import { clearAllEventsState, setAllEventsState } from './app/allEventsSlice';
import { useAppSelector } from './app/hooks';
import LoginRegister from './pages/LoginRegister';
import HeaderBar from './components/HeaderBar';
import {
  clearUnSwipedUsersState,
  setUnSwipedUsersState,
} from './app/unSwipedUsersSlice';
import {
  clearMatchedUsersState,
  setMatchedUsersState,
} from './app/matchedUsersSlice';
import MatchingViewDetail from './pages/MatchingViewDetail';

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
    if (userAuth) {
      apiUserService
        .getUnSwipedUsers(userAuth.userId)
        .then((allUsers) => dispatch(setUnSwipedUsersState(allUsers)))
        .catch((err) => console.error(err));
    } else {
      dispatch(clearUnSwipedUsersState());
    }
  }, [userAuth]);

  useEffect(() => {
    if (userAuth) {
      apiUserService
        .getMatchedUsers(userAuth.userId)
        .then((allUsers) => dispatch(setMatchedUsersState(allUsers)))
        .catch((err) => console.error(err));
    } else {
      dispatch(clearMatchedUsersState());
    }
  }, [userAuth]);

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
        .getAllEvents(userAuth.userId)
        .then((allEvents) => dispatch(setAllEventsState(allEvents)))
        .catch((err) => console.error(err));
    } else {
      dispatch(clearAllEventsState());
    }
  }, [userAuth]);

  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/matchingView" element={<MatchingView />} />
        <Route
          path="/matchingViewDetail/:userId"
          element={<MatchingViewDetail />}
        />
        <Route path="/chatDashboard" element={<ChatDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/eventsDashboard" element={<EventsDashboard />} />
        <Route path="/eventDetails/:eventId" element={<EventDetails />} />
        <Route path="/addEventForm" element={<AddEventForm />} />
        <Route path="/editEvent/:eventId" element={<EditEventForm />} />
        <Route path="/settingsView" element={<SettingsView />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
