import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SavedArticles from "./pages/SavedArticles"; 
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Discussion from "./pages/Discussion"; 
import ThoughtsPage from "./pages/ThoughtsPage";

import News from "./pages/News";
import News2 from "./pages/News2";
import News3 from "./pages/News3";  
import PostArticle from "./pages/PostArticle"; 

import DashboardLayout from "../layouts/DashboardLayout";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <div className="min-h-screen font-typewriter relative">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/BG2.jpg')",
            
          }}
        />
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* Main content */}
      <div className="relative min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <News />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/SavedArticles"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <SavedArticles />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/ndtv-news"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <News2 />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/hindu-news"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <News3 />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            
            {/* 🚀 New Discussion Route */}
            <Route
              path="/discussion"
              element={
                <ProtectedRoute>
                  <Discussion />
                </ProtectedRoute>
              }
            />

            <Route
              path="/threads/post"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <PostArticle />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/threads/thoughts"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <ThoughtsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />



            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<RegisterAndLogout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
