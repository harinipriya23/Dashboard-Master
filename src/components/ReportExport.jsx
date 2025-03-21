import {
  getTotalCollectionReport,
  getOutstandingReport,
  getDailyCollectionReport,
  getWeeklyCollectionReport,
  getMonthlyCollectionReport,
  getDailyOutstandingReport,
  getWeeklyOutstandingReport,
  getMonthlyOutstandingReport,
} from "./ReportFunctions";
import { patientsList } from "../data/Patients";

const today = new Date();
const lastWeek = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const todayDate = today.toISOString().split("T")[0];
today.setDate(today.getDate() - 1);
const yesterdayDate = today.toISOString().split("T")[0];

lastWeek.setDate(today.getDate() - 7);
const lastWeekDate = lastWeek.toISOString().split("T")[0];

const monthStart = `${year}-${month < 10 ? "0" + month : month}-01`;
const monthEnd = new Date(year, month, 0).toISOString().split("T")[0];

export const totalCollectionReport = getTotalCollectionReport(patientsList);
export const dailyCollectionReport = getDailyCollectionReport(
  patientsList,
  todayDate
);
export const yesterdayCollectionReport = getDailyCollectionReport(
  patientsList,
  yesterdayDate
);
export const monthlyCollectionReport = getMonthlyCollectionReport(
  patientsList,
  monthStart,
  monthEnd
);
export const weeklyCollectionReport = getWeeklyCollectionReport(
  patientsList,
  lastWeekDate,
  todayDate
);

export const totalOutstandingReport = getOutstandingReport(patientsList);
export const dailyOutstandingReport = getDailyOutstandingReport(
  patientsList,
  todayDate
);
export const monthlyOutstandingReport = getMonthlyOutstandingReport(
  patientsList,
  monthStart,
  monthEnd
);
export const weeklyOutstandingReport = getWeeklyOutstandingReport(
  patientsList,
  lastWeekDate,
  todayDate
);
