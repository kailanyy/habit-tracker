import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";

import { useState } from "react";

import confused from "@/public/icon-confused.png";
import Image from "next/image";

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType: any) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    return (
      <div className="flex flex-row">
        <div className="flex flex-col"></div>
        <div className="flex flex-col">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="flex flex-col"></div>
      </div>
    );
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    let startWeek = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormatDays = "d";
    const dateFormatWeeks = "EEE";
    const rows = [];
    let days = [];
    const weekDay = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormatDays);
        const cloneDay = day;
        days.push(
          <div
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="relative flex flex-col items-center p-4">
              {formattedDate} <Image src={confused} alt="confused" width={40} />
            </span>
          </div>,
        );
        day = addDays(day, 1);
        weekDay.push(
          <div key={i}>{format(addDays(startWeek, i), dateFormatWeeks)}</div>,
        );
      }
      rows.push(
        <div key={null} className="flex flex-col">
          <div className="flex justify-around">{weekDay}</div>
          <div className="flex flex-row">{days}</div>
        </div>,
      );
      days = [];
    }
    return <div>{rows}</div>;
  };
  const renderFooter = () => {
    return (
      <div className="flex-row">
        <div className="flex flex-col">
          <div
            className="relative -top-[50px] left-full flex"
            onClick={() => changeWeekHandle("prev")}
          >
            prev week
          </div>
        </div>
        <div className="flex flex-col" onClick={() => changeWeekHandle("next")}>
          <div className="relative -top-[50px] right-full flex">next week</div>
        </div>
      </div>
    );
  };
  return (
    <div className="calendar">
      {renderHeader()}
      {renderCells()}
      {renderFooter()}
    </div>
  );
};
