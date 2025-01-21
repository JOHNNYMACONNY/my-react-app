import React from 'react';
import UserRegistration from './components/UserRegistration';
import UserProfile from './components/UserProfile';
import TaskExchange from './components/TaskExchange';
import CollaborationHub from './components/CollaborationHub';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Task Exchange Platform</h1>
      <UserRegistration />
      <UserProfile />
      <TaskExchange />
      <CollaborationHub />
    </div>
  );
}

export default App;