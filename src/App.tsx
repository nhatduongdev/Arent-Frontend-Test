import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import ColumnPage from "@/pages/Column/ColumnPage";
import RecordPage from "@/pages/Record/RecordPage";
import Container from "@/components/layout/Container";
import LoginPage from "./pages/Login/LoginPage";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/column" element={<ColumnPage />} />
                <Route path="/record" element={<RecordPage />} />
              </Routes>
            </Container>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
