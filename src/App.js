import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllReports from "./components/all-reports";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import NeedResque from "./components/need-resque";
import ReportDetail from "./components/report-detail";
import ResqueDetail from "./components/resque-detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-reports" element={<AllReports />} />
          <Route path="/report-detail/:postId" element={<ReportDetail />} />
          <Route path="/need-resques" element={<NeedResque />} />
          <Route path="/resque-detail/:id" element={<ResqueDetail />} />
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
    </div>
  );
}

export default App;