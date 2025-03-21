export const getTotalCollectionReport = (patientsList) => {
  let totalCollection = 0;
  let patientCount = 0;
  patientsList.forEach((patient) => {
    const amountPaid = Number(patient.amountPaid.replace(",", ""));
    totalCollection += amountPaid;
    patientCount++;
  });
  return { totalCollection, patientCount };
};

export const getOutstandingReport = (patientsList) => {
  let totalOutstanding = 0;
  let patientCount = 0;

  patientsList.forEach((patient) => {
    const outstandingAmount = Number(
      patient.outstandingAmount.replace(",", "")
    );
    totalOutstanding += outstandingAmount;
    if (patient.outstandingAmount === "0") {
      patientCount;
    } else {
      patientCount++;
    }
  });

  return { totalOutstanding, patientCount };
};

export const getDailyCollectionReport = (patientsList, todayDate) => {
  let dailyCollection = 0;

  patientsList.forEach((patient) => {
    if (patient.appointmentDate === todayDate) {
      const amountPaid = Number(patient.amountPaid.replace(",", ""));
      dailyCollection += amountPaid;
    }
  });
  return { todayDate, dailyCollection };
};

export const getWeeklyCollectionReport = (
  patientsList,
  lastWeekDate,
  todayDate
) => {
  let weeklyCollection = 0;
  let patientCount = 0;

  patientsList.forEach((patient) => {
    if (
      patient.appointmentDate >= lastWeekDate &&
      patient.appointmentDate <= todayDate
    ) {
      const amountPaid = Number(patient.amountPaid.replace(",", ""));
      weeklyCollection += amountPaid;
      patientCount++;
    }
  });

  return {
    weeklyCollection,
    patientCount,
    startDate: lastWeekDate,
    endDate: todayDate,
  };
};

export const getMonthlyCollectionReport = (
  patientsList,
  monthStart,
  monthEnd
) => {
  let totalCollection = 0;
  let patientCount = 0;

  patientsList.forEach((patient) => {
    if (
      patient.appointmentDate >= monthStart &&
      patient.appointmentDate <= monthEnd
    ) {
      const amountPaid = Number(patient.amountPaid.replace(",", ""));
      totalCollection += amountPaid;
      patientCount++;
    }
  });

  return {
    totalCollection,
    patientCount,
    startDate: monthStart,
    endDate: monthEnd,
  };
};

export const getDailyOutstandingReport = (patientsList, todayDate) => {
  let dailyCollection = 0;

  patientsList.forEach((patient) => {
    if (patient.appointmentDate === todayDate) {
      const outstandingAmount = Number(
        patient.outstandingAmount.replace(",", "")
      );
      dailyCollection += outstandingAmount;
    }
  });
  return { todayDate, dailyCollection };
};

export const getWeeklyOutstandingReport = (
  patientsList,
  lastWeekDate,
  todayDate
) => {
  let weeklyCollection = 0;
  let patientCount = 0;

  patientsList.forEach((patient) => {
    if (
      patient.appointmentDate >= lastWeekDate &&
      patient.appointmentDate <= todayDate
    ) {
      const outstandingAmount = Number(
        patient.outstandingAmount.replace(",", "")
      );
      weeklyCollection += outstandingAmount;
      patientCount++;
    }
  });

  return {
    weeklyCollection,
    patientCount,
    startDate: lastWeekDate,
    endDate: todayDate,
  };
};

export const getMonthlyOutstandingReport = (
  patientsList,
  monthStart,
  monthEnd
) => {
  let totalCollection = 0;
  let patientCount = 0;

  patientsList.forEach((patient) => {
    if (
      patient.appointmentDate >= monthStart &&
      patient.appointmentDate <= monthEnd
    ) {
      const outstandingAmount = Number(
        patient.outstandingAmount.replace(",", "")
      );
      totalCollection += outstandingAmount;
      patientCount++;
    }
  });

  return {
    totalCollection,
    patientCount,
    startDate: monthStart,
    endDate: monthEnd,
  };
};
