import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { DatePickerProps } from "../../constants/props";

const MyDatePicker: React.FC<DatePickerProps> = ({
  selectedStartDate,
  selectedEndDate,
  onDateChange,
}) => {
  return (
    <div className="date-picker">
      <DatePicker
        selected={selectedStartDate}
        onChange={(date: Date) => onDateChange(date, selectedEndDate)}
        selectsStart
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        dateFormat="dd MMM yyyy"
        showIcon
      />
      <DatePicker
        selected={selectedEndDate}
        onChange={(date: Date) => onDateChange(selectedStartDate, date)}
        selectsEnd
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
        dateFormat="dd MMM yyyy"
        showIcon
      />
    </div>
  );
};

export default MyDatePicker;
