import React from "react";
import { useState } from "react";
import Doctors from "../data/Doctors";

const NewAppointment = () => {
  const [submit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    alert("Appointment Confirmed!");
  }

  return (
    <div
      className="h-screen w-full gap-5 flex flex-col items-center p-5 dark:bg-themeDark-senary 
    dark:text-themeDark-primary bg-gray-200"
    >
      <p className="font-bold text-[20px] md:text-[24px]">New Appointment</p>
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-100 dark:bg-themeDark-quinary p-6 rounded-lg shadow-lg flex flex-col gap-4"
      >
        {/* Name Fields */}
        <div className="flex gap-4">
          <input type="text" className="input" placeholder="First Name" />
          <input type="text" className="input" placeholder="Last Name" />
        </div>

        {/* Age & Gender */}
        <div className="flex gap-4">
          <input type="number" className="input" placeholder="Age" />
          <select className="input">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Appointment Details */}
        <input type="date" className="input uppercase" />
        <select className="input">
          {Doctors.map((doctor) => (
            <option key={doctor.id}>{doctor.name}</option>
          ))}
        </select>

        {/* Booking Type */}
        <select className="input">
          <option>Walk-in</option>
          <option>Online</option>
          <option>Phone Call</option>
        </select>

        {/* Payment Details */}
        <div className="flex gap-4">
          <input
            type="text"
            className="input"
            placeholder="Fees Amount (Rs.)"
          />
          <input
            type="text"
            className="input"
            placeholder="Amount Paid (Rs.)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-[12px] sm:text-[14px] bg-themeLight-tertiary hover:bg-themeLight-quaternary 
        bg-blue-600 duration-300 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default NewAppointment;
