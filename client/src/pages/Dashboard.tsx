/* personalized landing page that greets users by their username */

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Here's your dashboard content!</p>
    </div>
  );
};

export default Dashboard;