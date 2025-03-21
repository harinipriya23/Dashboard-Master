import React from "react";
import { useState } from "react";
import Availabilty from "../charts/Availablity";
import StaffTable from "../components/StaffTable";
import hospitalStaff from "../data/HospitalStaff";
import Distribution from "../charts/Distribution";
import PaginationControls from "../components/PaginationControls";

export const STAFF_COLORS = [
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
  "#1976d2",
  "#0288d1",
  "#0097a7",
  "#00796b",
];
const Staff = ({ isMenuOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage;

  const totalPages = Math.ceil(hospitalStaff.length / recordsPerPage);
  const currentHospitalStaff = hospitalStaff.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  return (
    <div className="h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[20px] font-semibold racking-wide mx-5">
        Hospital Staff Details
      </p>
      <section>
        <div className="mx-5 my-2 dark:bg-themeDark-quinary">
          <div
            className={` ${
              isMenuOpen ? "bs:grid-cols-2" : "md:grid-cols-2"
            } grid grid-cols-1 place-items-center w-full 
        dark:bg-themeDark-senary`}
          >
            <Distribution
              list={hospitalStaff}
              name="Staff"
              colors={STAFF_COLORS}
            />
            <Availabilty availability={hospitalStaff} text="Staff" />
          </div>
        </div>

        <div className=" my-2 px-5 w-full">
          <p className="font-semibold text-[20px] my-4 capitalize">
            List of Staff
          </p>
          <StaffTable currentHospitalStaff={currentHospitalStaff} />
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

export default Staff;
