import React, { useState } from "react";
import { STAFF_COLORS } from "./Staff";
import doctorsList from "../data/Doctors";
import { DOCTORS_COLORS } from "./Doctors";
import { PATIENTS_COLORS } from "./Appointments";
import { patientsList } from "../data/Patients";
import Availabilty from "../charts/Availablity";
import Distribution from "../charts/Distribution";
import hospitalStaff from "../data/HospitalStaff";
import ReportTable from "../components/ReportTable";
import CollectionReport from "../components/CollectionReport";
import PaginationControls from "../components/PaginationControls";

const Dashboard = ({ isMenuOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage;
  const totalPages = Math.ceil(patientsList.length / recordsPerPage);
  const currentPatientsList = patientsList.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  return (
    <div
      className="h-full w-full bg-gray-200
     dark:bg-themeDark-senary dark:text-themeDark-primary p-5"
    >
      <p className="text-[20px] font-semibold tracking-wide mx-5">
        Revenue Report
      </p>
      <CollectionReport isMenuOpen={isMenuOpen} />
      <p className="text-[20px] font-semibold tracking-wide mx-5">
        Hospital Departmental Breakdown
      </p>
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <Distribution
          list={patientsList}
          name="Patients"
          colors={PATIENTS_COLORS}
        />
        <Distribution list={hospitalStaff} name="Staff" colors={STAFF_COLORS} />
        <Distribution
          list={doctorsList}
          name="Doctors"
          colors={DOCTORS_COLORS}
        />
      </section>
      <p className="text-[20px] font-semibold tracking-wide mx-5">
        Clinical Team Availability
      </p>
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <Availabilty availability={doctorsList} text="Doctors" />
        <Availabilty availability={hospitalStaff} text="Staff" />
      </section>
      <ReportTable currentPatientsList={currentPatientsList} />
      <PaginationControls
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Dashboard;
