import React, { useState } from "react";
import { patientsList } from "../data/Patients";
import ReportTable from "../components/ReportTable";
import CollectionReport from "../components/CollectionReport";
import OutstandingAmount from "../components/OutstandingAmount";
import PaginationControls from "../components/PaginationControls";
const Report = ({ isMenuOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage;
  const totalPages = Math.ceil(patientsList.length / recordsPerPage);
  const currentPatientsList = patientsList.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  return (
    <div className="h-full w-full bg-gray-200 dark:bg-themeDark-senary dark:text-themeDark-primary p-5">
      <p className="text-[20px] font-semibold tracking-wide mx-5">
        Revenue Report
      </p>
      <CollectionReport isMenuOpen={isMenuOpen} />
      <p className="text-[20px] font-semibold tracking-wide mx-5">
        Due Payment Report
      </p>
      <OutstandingAmount isMenuOpen={isMenuOpen} />
      <ReportTable currentPatientsList={currentPatientsList} />
      <PaginationControls
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Report;
