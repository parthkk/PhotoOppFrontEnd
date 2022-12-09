import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation to="/" />
        <main>
          {isLoggedIn && (
            <Routes>
              <Route path="/:userId/places" element={<UserPlaces />} />
              <Route path="/" element={<Users />} />
              <Route path="/places/new" element={<NewPlace />} />
              <Route path="/places/:placeId" element={<UpdatePlace />} />
              <Route path="/auth" element={<Navigate to="/" />} />
            </Routes>
          )}
          {!isLoggedIn && (
            <Routes>
              <Route path="/:userId/places" element={<UserPlaces />} />
              <Route path="/" element={<Users />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          )}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
