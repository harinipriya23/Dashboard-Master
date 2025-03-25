import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router";
import Doctors from "./pages/Doctors";
import Report from "./pages/Report";
import Staff from "./pages/Staff";
import NewAppointment from "./pages/NewAppointment";
import Appointments from "./pages/Appointments";
import NewMember from "./pages/NewMember";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="h-screen flex">
      <Sidebar isMenuOpen={isMenuOpen} className="fixed h-full" />
      <div
        className={`flex-1 transition-all duration-300 ${
          isMenuOpen ? "ml-[180px]" : "ml-[50px]"
        }`}
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="p-5 mt-6 dark:bg-themeDark-senary ">
          <Routes>
            <Route path="/" element={<Dashboard isMenuOpen={isMenuOpen} />} />
            <Route
              path="/reports"
              element={<Report isMenuOpen={isMenuOpen} />}
            />
            <Route
              path="/doctors"
              element={<Doctors isMenuOpen={isMenuOpen} />}
            />
            <Route path="/staff" element={<Staff isMenuOpen={isMenuOpen} />} />
            <Route path="/new-member" element={<NewMember />} />
            <Route
              path="/appointments"
              element={<Appointments isMenuOpen={isMenuOpen} />}
            />
            <Route path="/new-appointment" element={<NewAppointment />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
