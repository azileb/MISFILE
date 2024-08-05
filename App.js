import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashboardPage'; // Mock dashboard component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        {/* Add other routes if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
