import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date as Date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date as Date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default MyDatePicker;
