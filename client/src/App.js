import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Error, Landing, Register, ProtectedRoute } from "./pages";

import {
  AddJob,
  ListJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";
import HowWeWork from "./pages/dashboard/HowWeWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="stats" element={<Stats />} />
          <Route path="HowWeWork" element={<HowWeWork />} />
          <Route path="/" element={<ListJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
