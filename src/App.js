import React, { useState, useCallback, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./shared/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import Homepage from "./HomePage/homepage";

//import Users from "./user/pages/Users";
//import NewPlace from "./places/pages/NewPlace";
//import UserPlaces from "./places/pages/UserPlaces";
//import UpdatePlace from "./places/pages/UpdatePlace";
//import Auth from "./user/pages/Auth";

const Users = React.lazy(() => import("./user/pages/Users"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const Auth = React.lazy(() => import("./user/pages/Auth"));

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
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {isLoggedIn && (
              <Routes>
                <Route path="/:userId/places" element={<UserPlaces />} />
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/places/new" element={<NewPlace />} />
                <Route path="/places/:placeId" element={<UpdatePlace />} />
                <Route path="/auth" element={<Navigate to="/" />} />
              </Routes>
            )}
            {!isLoggedIn && (
              <Routes>
                <Route path="/:userId/places" element={<UserPlaces />} />
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            )}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
