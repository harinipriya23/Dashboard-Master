import React from "react";
import {
  totalCollectionReport,
  dailyCollectionReport,
  weeklyCollectionReport,
  monthlyCollectionReport,
} from "../components/ReportExport";
import { FaIndianRupeeSign } from "react-icons/fa6";

const CollectionReport = ({ isMenuOpen }) => {
  return (
    <div>
      <section
        className={`${
          isMenuOpen
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "xs:grid-cols-2 bs:grid-cols-4"
        } grid grid-cols-1 my-4 place-items-center mx-2 gap-4`}
      >
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign />
            {totalCollectionReport.totalCollection}
          </p>
          <span className="revenue-span ">Total Revenue</span>
        </div>
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign /> {monthlyCollectionReport.totalCollection}
          </p>
          <span className="revenue-span">Monthly Revenue</span>
        </div>
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign /> {weeklyCollectionReport.weeklyCollection}
          </p>
          <span className="revenue-span">Weekly Revenue</span>
        </div>
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign /> {dailyCollectionReport.dailyCollection}
          </p>
          <span className="revenue-span">Daliy Revenue</span>
        </div>
      </section>
    </div>
  );
};

export default CollectionReport;
