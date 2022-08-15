import React from 'react';
import './Sass/App.scss'; // Do not remove!
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import SplashScreen from './pages/SplashScreen';
import LoginRegister from './pages/LoginRegister';
import MatchingView from './pages/MatchingView';
import MatchingViewDetail from './pages/MatchingViewDetail';
import ChatDashboard from './pages/ChatDashboard';
import Chat from './pages/Chat';
import EventsDashboard from './pages/EventsDashboard';
import EventDetails from './pages/EventDetails';
import AddEventForm from './pages/AddEventForm';
import SettingsView from './pages/SettingsView';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matchingView" element={<MatchingView />} />
        <Route path="/matchingViewDetail" element={<MatchingViewDetail />} />
        <Route path="/ChatDashboard" element={<ChatDashboard />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/EventsDashboard" element={<EventsDashboard />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/AddEventForm" element={<AddEventForm />} />
        <Route path="/SettingsView" element={<SettingsView />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
