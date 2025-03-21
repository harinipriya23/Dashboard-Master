import React, { useState } from "react";
import doctorsList from "../data/Doctors";
import Availability from "../charts/Availablity";
import Distribution from "../charts/Distribution";
import DoctorDetails from "../components/DoctorDetails";

export const DOCTORS_COLORS = [
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
  "#d32f2f",
  "#c2185b",
  "#7b1fa2",
  "#512da8",
  "#303f9f",
];
const Doctors = ({ isMenuOpen }) => {
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const recordsPerPage = 5;

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + recordsPerPage);
  };
  const displayedDoctors = doctorsList.slice(0, displayCount);

  const departments = [
    "All",
    ...new Set(doctorsList.map((doctor) => doctor.medicalDepartment.trim())),
  ];
  const filteredDoctors =
    selectedDepartment === "All"
      ? doctorsList
      : doctorsList.filter(
          (doctor) => doctor.medicalDepartment === selectedDepartment
        );
  return (
    <div className="h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[20px] font-semibold tracking-wide mx-5">
        Doctor Details
      </p>
      <main className="grid grid-cols-1">
        <section
          className={`${
            isMenuOpen ? "bs:grid-cols-2" : "md:grid-cols-2"
          } grid grid-cols-1 place-items-center w-full
        dark:bg-themeDark-senary`}
        >
          <Distribution
            list={doctorsList}
            name="Doctors"
            colors={DOCTORS_COLORS}
          />
          <Availability availability={doctorsList} text="Doctors" />
        </section>
        <section className="col-span-8">
          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-[20px] font-semibold my-2 mx-10 capitalize">
              List of doctors
            </p>
            <div>
              <select
                className="px-2 py-1 rounded-md bg-gray-300 dark:bg-themeDark-quinary
                outline-none text-[12px] md:text-[14px]"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            className={`${
              isMenuOpen
                ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "sm:grid-cols-2 md:grid-cols-2 bs:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            } grid grid-cols-1  gap-4 mx-5 place-items-center
       `}
          >
            {selectedDepartment === "All" ? (
              <>
                {displayedDoctors.map((doctor) => (
                  <DoctorDetails
                    key={doctor.id}
                    doctor={doctor}
                    filteredDoctors={displayedDoctors}
                  />
                ))}
              </>
            ) : (
              <>
                {filteredDoctors.map((doctor) => (
                  <DoctorDetails
                    key={doctor.id}
                    doctor={doctor}
                    filteredDoctors={filteredDoctors}
                  />
                ))}
              </>
            )}
          </div>
          {displayCount < doctorsList.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400
                dark:bg-themeDark-quaternary hover:dark:bg-themeDark-quinary transition duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Doctors;
