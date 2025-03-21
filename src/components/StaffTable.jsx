import React from "react";

const StaffTable = ({ currentHospitalStaff }) => {
  return (
    <div>
      <table className="w-full mx-auto">
        <thead className="border-[0.5px] border-gray-600 bg-gray-400  dark:border-themeDark-quaternary dark:bg-themeDark-quinary">
          <tr className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 p-4 text-left gap-5 my-2">
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th hidden sm:block">Age</th>
            <th className="th hidden md:block ">Department</th>
            <th className="th ">Availability</th>
          </tr>
        </thead>
        <tbody className="border-[0.5px] border-gray-600 bg-gray-300 dark:bg-themeDark-senary  dark:border-themeDark-quaternary">
          {currentHospitalStaff.map((staff) => (
            <tr
              key={staff.id}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center p-4 h-10 my-6 gap-5 text-left"
            >
              <td className="td">{staff.id}</td>
              <td className="td">{staff.name}</td>
              <td className="td hidden sm:block">{staff.age}</td>
              <td className="td hidden md:block">{staff.medicalDepartment}</td>
              <td className="td w-[80px] lg:w-[100px]">
                <div
                  className={`rounded-md text-[9px] sm:text-[10px] py-1 px-2 lg:py-2 lg:px-4 lg:text-[12px] w-full text-center text-themeDark-senary border-[1px]
           border-themeDark-senary dark:border-themeDark-tertiary text-sm ${
             staff.availability === "Available"
               ? "bg-green-400 hover:bg-green-500"
               : "bg-red-400 hover:bg-red-500"
           }`}
                >
                  {staff.availability}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
