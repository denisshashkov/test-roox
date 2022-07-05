import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Preloader from "./components/commons/preloader/Preloader";

const UsersPage = lazy(() => import("./components/users/UsersPage"));
const ProfilePage = lazy(() => import("./components/profile/ProfilePage"));
function App() {
  return (
    <div className="app">
      <Aside />
      <div className="app__content">
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/*" element={<UsersPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
