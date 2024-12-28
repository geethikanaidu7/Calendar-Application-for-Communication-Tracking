import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserDashboard from './pages/UserDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;