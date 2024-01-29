import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MyDatePickerProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

const MyDatePicker: React.FC<MyDatePickerProps> = ({
  selectedStartDate,
  selectedEndDate,
  onDateChange,
}) => {
  return (
    <>
      <DatePicker
        selected={selectedStartDate}
        onChange={(date: Date) => onDateChange(date, selectedEndDate)}
        selectsStart
        startDate={selectedStartDate}
        endDate={selectedEndDate}
      />
      <DatePicker
        selected={selectedEndDate}
        onChange={(date: Date) => onDateChange(selectedStartDate, date)}
        selectsEnd
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
      />
    </>
  );
};

export default MyDatePicker;
