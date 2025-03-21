import React from "react";

const GenderFilter = ({ genderFilter, setGenderFilter }) => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value=""
            checked={genderFilter === ""}
            onChange={() => setGenderFilter("")}
            className="hidden"
          />
          <span
            className={`px-3 py-1 rounded-md cursor-pointer ${
              genderFilter === ""
                ? "text-gray-100 bg-themeDark-tertiary "
                : "dark:text-themeDark-secondary dark:dark:bg-themeDark-quinary"
            }`}
          >
            All
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={genderFilter === "Male"}
            onChange={() => setGenderFilter("Male")}
            className="hidden"
          />
          <span
            className={`px-3 py-1 rounded-md cursor-pointer ${
              genderFilter === "Male"
                ? "text-gray-100 bg-themeDark-tertiary "
                : "bg-gray-300 text-gray-700 dark:text-themeDark-secondary dark:bg-themeDark-quinary"
            }`}
          >
            Male
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={genderFilter === "Female"}
            onChange={() => setGenderFilter("Female")}
            className="hidden"
          />
          <span
            className={`px-3 py-1 rounded-md cursor-pointer ${
              genderFilter === "Female"
                ? "text-gray-100 bg-themeDark-tertiary "
                : "bg-gray-300 text-gray-700 dark:text-themeDark-secondary dark:bg-themeDark-quinary"
            }`}
          >
            Female
          </span>
        </label>
      </div>
    </div>
  );
};

export default GenderFilter;
