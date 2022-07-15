import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAnnouncement from "./components/admin-announcement";
import AllReports from "./components/all-reports";
import Announcement from "./components/announcement";
import CitizenDashboard from "./components/citizen-dashboard";
import CitizenDocumentRequest from "./components/citizen-document-request";
import CitizenHelp from "./components/citizen-help";
import Dashboard from "./components/dashboard";
import DocumentCategories from "./components/document-categories";
import DocumentRequests from "./components/document-requests";
import Login from "./components/login";
import NeedResque from "./components/need-resque";
import Purok from "./components/purok";
import RealtimeRequests from "./components/realtime-requests";
import Register from "./components/register";
import ReportCategories from "./components/report-categories";
import ReportDetail from "./components/report-detail";
import ResqueDetail from "./components/resque-detail";

function App() {

  return (
    // <div className="container mt-5">
    //   <div className="card p-5 shadow">
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/announcement" element={<AdminAnnouncement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/citizen-help" element={<CitizenHelp />} />
        <Route path="/citizen-announcement" element={<Announcement />} />
        <Route path="/citizen-document-request" element={<CitizenDocumentRequest />} />
        <Route path="/realtime-requests" element={<RealtimeRequests />} />
        <Route path="/document-categories" element={<DocumentCategories />} />
        <Route path="/document-requests" element={<DocumentRequests />} />
        <Route path="/report-categories" element={<ReportCategories />} />
        <Route path="/all-reports" element={<AllReports />} />
        <Route path="/report-detail/:postId" element={<ReportDetail />} />
        <Route path="/need-resques" element={<NeedResque />} />
        <Route path="/resque-detail/:id" element={<ResqueDetail />} />
        <Route path="/purok" element={<Purok />} />
        <Route
          path="*"
          element={
            <div className="container mt-5">
              <h1 className="text-center">404 Page Not Found</h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
    //   </div>
    // </div>
  );
}

export default App;
