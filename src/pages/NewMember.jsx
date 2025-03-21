import React, { useState } from "react";
import Doctors from "../data/Doctors";

const NewMember = () => {
  const [memberType, setMemberType] = useState("Doctor");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    department: "",
    experience: "",
    fees: "",
    bookingBeforeDays: "",
  });

  const uniqueDepartments = [
    ...new Set(Doctors.map((doctor) => doctor.medicalDepartment)),
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleMemberTypeChange = (e) => {
    setMemberType(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`New ${memberType} Added:`, formData);
    setFormData({
      name: "",
      age: "",
      department: "",
      experience: "",
      fees: "",
      bookingBeforeDays: "",
    });
    alert(`New ${memberType} Added!`);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center bg-gray-200 gap-6 p-5 dark:bg-themeDark-senary dark:text-themeDark-primary">
      <p className="font-bold text-[20px] md:text-[24px]">
        Add New {memberType}
      </p>
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Doctor"
            checked={memberType === "Doctor"}
            onChange={handleMemberTypeChange}
            className="w-5 h-5 outline-none"
          />
          Doctor
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Staff"
            checked={memberType === "Staff"}
            onChange={handleMemberTypeChange}
            className="w-5 h-5 outline-none"
          />
          Staff
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-100 dark:bg-themeDark-quinary p-6 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Full Name"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
            placeholder="Age"
            required
          />
        </div>

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="">Select Department</option>
          {uniqueDepartments.map((dept, index) => (
            <option key={index}>{dept}</option>
          ))}
        </select>
        {memberType === "Doctor" && (
          <>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="input"
              placeholder="Years of Experience"
              required
            />

            <input
              type="text"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
              className="input"
              placeholder="Consultation Fees (Rs.)"
              required
            />
            <input
              type="number"
              name="bookingBeforeDays"
              value={formData.bookingBeforeDays}
              onChange={handleChange}
              className="input"
              placeholder="Booking Before (Days)"
              required
            />
          </>
        )}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
        >
          Add {memberType}
        </button>
      </form>
    </div>
  );
};

export default NewMember;
