import React, { useState } from "react";
import Table from "../components/Table";
import { patientsList } from "../data/Patients";
import GenderChart from "../charts/GenderChart";
import Distribution from "../charts/Distribution";
import GenderFilter from "../components/GenderFilter";
import AppointmentMethod from "../charts/AppoinmentMethod";
import AppointmentStatus from "../charts/AppointmentStatus";
import PaginationControls from "../components/PaginationControls";

export const PATIENTS_COLORS = [
  "#d32f2f",
  "#c2185b",
  "#7b1fa2",
  "#512da8",
  "#303f9f",
  "#1976d2",
  "#0288d1",
  "#0097a7",
  "#00796b",
  "#388e3c",
  "#689f38",
  "#afb42b",
  "#fbc02d",
  "#ffa000",
  "#f57c00",
  "#e64a19",
];

const Appointments = ({ isMenuOpen }) => {
  const [genderFilter, setGenderFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patientStatus, setPatientStatus] = useState("All");

  const recordsPerPage = 6;
  const startIndex = (currentPage - 1) * recordsPerPage;

  const filteredPatients = genderFilter
    ? patientsList.filter((patient) => patient.gender === genderFilter)
    : patientsList;
  console.log("filteredPatients", filteredPatients);
  const appointmentMethodFilteredPatients =
    patientStatus === "All"
      ? filteredPatients
      : filteredPatients.filter(
          (patient) => patient.appointmentStatus === patientStatus
        );
  console.log(
    "appointmentMethodFilteredPatients",
    appointmentMethodFilteredPatients
  );
  const currentPatients = appointmentMethodFilteredPatients.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  console.log("currentPatients", currentPatients);
  const totalPages = Math.ceil(
    (patientStatus === "All"
      ? filteredPatients.length
      : appointmentMethodFilteredPatients.length) / recordsPerPage
  );
  const status = [
    "All",
    ...new Set(patientsList.map((patient) => patient.appointmentStatus.trim())),
  ];
  console.log("totalPages", totalPages);
  return (
    <div className=" h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[24px] font-bold tracking-wide mx-5">
        Appointment Details
      </p>
      <section>
        <div className="mx-5 my-2 dark:bg-themeDark-quinary">
          <div
            className={`${
              isMenuOpen ? "bs:grid-cols-2" : "md:grid-cols-2"
            } grid grid-cols-1 xl:grid-cols-4 place-items-center w-full 
          dark:bg-themeDark-senary rounded-md`}
          >
            <AppointmentStatus />
            <Distribution
              list={patientsList}
              name="Patients"
              colors={PATIENTS_COLORS}
            />
            <AppointmentMethod />
            <GenderChart />
          </div>
        </div>

        <div className=" my-2 px-10 w-full">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <p className="font-semibold text-[20px] my-4 capitalize">
              List of patients
            </p>{" "}
            <div>
              {" "}
              <select
                className="px-2 py-1 rounded-md bg-gray-300 dark:bg-themeDark-quinary
                outline-none text-[12px] md:text-[14px]"
                value={patientStatus}
                onChange={(e) => {
                  setPatientStatus(e.target.value), setCurrentPage(1);
                }}
              >
                {status.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <GenderFilter
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
          />
          <Table currentPatients={currentPatients} startIndex={startIndex} />
          <PaginationControls
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </div>
  );
};

export default Appointments;
