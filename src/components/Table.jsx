import React from "react";

const Table = ({ currentPatients, startIndex }) => {
  return (
    <div>
      <table className="w-full mx-auto">
        <thead className="border-[0.5px] border-gray-600 bg-gray-400 dark:border-themeDark-quaternary dark:bg-themeDark-quinary">
          <tr
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 bs:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8  p-4 text-left gap-5 my-2`}
          "
          >
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th hidden md:block">Age</th>
            <th className="th hidden lg:block">Gender</th>
            <th className="th hidden bs:block">Doctor</th>
            <th className="th hidden xl:block">Department</th>
            <th className="th hidden sm:block">Date</th>
            <th className="th">Status</th>
          </tr>
        </thead>
        <tbody className="border-[0.5px] border-gray-600 bg-gray-300 dark:bg-themeDark-senary dark:border-themeDark-quaternary">
          {currentPatients.map((patient, index) => (
            <tr
              key={patient.id}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 bs:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 items-center p-4 h-10 my-6 gap-5 text-left"
            >
              <td className="td">{startIndex + index + 1}</td>
              <td className="td">{patient.name}</td>
              <td className="td hidden md:block">{patient.age}</td>
              <td className="td hidden lg:block">{patient.gender}</td>
              <td className="td hidden bs:block">{patient.doctor}</td>
              <td className="td hidden xl:block">
                {patient.medicalDepartment}
              </td>
              <td className="td hidden sm:block">{patient.appointmentDate}</td>
              <td className="td w-24 ">
                <div
                  className={`rounded-md text-[11px] py-1 px-2 w-full text-center text-themeDark-senary border-[1px]
                 border-themeDark-senary dark:border-themeDark-tertiary text-sm ${
                   patient.appointmentStatus === "Completed"
                     ? "bg-green-300 hover:bg-green-500"
                     : patient.appointmentStatus === "Confirmed"
                     ? "bg-blue-300 hover:bg-blue-500"
                     : patient.appointmentStatus === "Cancelled"
                     ? "bg-amber-300 hover:bg-amber-500"
                     : "bg-red-300 hover:bg-red-500"
                 }`}
                >
                  {patient.appointmentStatus}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
