import React from 'react';
import Header from './Header.jsx';
import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';
import { motion } from 'framer-motion';

const Dashboard = ({ children, username, onNameChange }) => {
  return (
    <div className="min-h-screen p-6 md:p-8 lg:p-12 max-w-[1400px] mx-auto flex flex-col">
      <AppHeader />
      <Header username={username} onNameChange={onNameChange} />
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </main>
      <AppFooter />
    </div>
  );
};

export default Dashboard;
