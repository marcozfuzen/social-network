import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('feed');

  const renderPage = () => {
    switch (currentPage) {
      case 'feed':
        return <div><h1>Feed Page</h1><p>This is the feed page.</p></div>;
      case 'profile':
        return <div><h1>Profile Page</h1><p>This is the profile page.</p></div>;
      default:
        return <div><h1>Feed Page</h1><p>This is the feed page.</p></div>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('feed')}>Feed</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;