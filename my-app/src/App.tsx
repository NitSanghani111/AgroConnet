import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { currentUser, analytics } from './data/mockData';

function App() {
  const [user] = useState(currentUser);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar role={user.role} />
        <div className="flex-1 ml-64">
          <Header user={user} />
          <main className="mt-16 p-6">
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard analytics={analytics} role={user.role} />}
              />
              {/* Add other routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;