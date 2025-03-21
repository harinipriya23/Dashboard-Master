import React from "react";
import {
  totalOutstandingReport,
  dailyOutstandingReport,
  weeklyOutstandingReport,
  monthlyOutstandingReport,
} from "../components/ReportExport";
import { FaIndianRupeeSign } from "react-icons/fa6";

const OutstandingAmount = ({ isMenuOpen }) => {
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
            <FaIndianRupeeSign /> {totalOutstandingReport.totalOutstanding}
          </p>
          <span className="revenue-span">Total Balance Due</span>
        </div>
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign /> {monthlyOutstandingReport.totalCollection}
          </p>{" "}
          <span className="revenue-span">Montly Balance Due</span>
        </div>
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign /> {weeklyOutstandingReport.weeklyCollection}
          </p>
          <span className="revenue-span">Weekly Balance Due</span>
        </div>
        <div className="revenue-div">
          <p className="rs">
            <FaIndianRupeeSign /> {dailyOutstandingReport.dailyCollection}
          </p>{" "}
          <span className="revenue-span">Daliy Balance Due</span>
        </div>
      </section>
    </div>
  );
};

export default OutstandingAmount;
