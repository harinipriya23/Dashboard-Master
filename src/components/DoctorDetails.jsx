import React from "react";

const DoctorDetails = ({ doctor }) => {
  return (
    <div
      className="border-gray-600 bg-gray-300 hover:bg-gray-100 hover:dark:bg-themeDark-senary dark:bg-themeDark-quinary border-[0.5px] dark:border-themeDark-tertiary
 border-themeLight-quaternary flex flex-col items-center my-2 justify-center text-[12px] lg:text-[14px] text-themeLight-quinary
  bg-themeLight-secondary rounded-md p-5 w-44 sm:w-52 sm:h-44 lg:w-64 lg:h-52 duration-500"
    >
      <div>
        <p className="dark:text-themeDark-secondary">
          Name :{" "}
          <span className="dark:text-themeDark-primary">{doctor.name}</span>
        </p>
        <p className="dark:text-themeDark-secondary">
          Age :{" "}
          <span className="dark:text-themeDark-primary">{doctor.age}</span>
        </p>
        <p className="dark:text-themeDark-secondary">
          Department :{" "}
          <span className="dark:text-themeDark-primary">
            {doctor.medicalDepartment}
          </span>
        </p>
        <p className="dark:text-themeDark-secondary">
          Experience :{" "}
          <span className="dark:text-themeDark-primary">
            {doctor.experience}
          </span>
        </p>
        <p className="dark:text-themeDark-secondary">
          Success Rate :{" "}
          <span className="dark:text-themeDark-primary">
            {doctor.successRate}
          </span>
        </p>
        <p className="dark:text-themeDark-secondary">
          Fees Amount :{" "}
          <span className="dark:text-themeDark-primary">{doctor.fees}</span>
        </p>
        <p className="dark:text-themeDark-secondary">
          Book Before :{" "}
          <span className="dark:text-themeDark-primary">
            {doctor.bookingBeforeDays} days
          </span>
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
