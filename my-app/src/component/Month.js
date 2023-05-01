import React, { useState } from "react";
import Day from "./Day";
import DaySm from "./DaySm";
import moment from "moment";

function Month(props) {
  const { date, setDate } = props;
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const [activeIndex, setActiveIndex] = useState(null);
  const todayOfWeek= moment().format('dddd');
  
  const[dayOfWeek,setDayOfWeek]=useState(todayOfWeek);

  const startOfMonth = moment(date).startOf("month").startOf("week");
  console.log(startOfMonth)
  const endOfMonth = moment(date).endOf("month").endOf("week");

  const days = [];
  let day = startOfMonth;

  while (day.isBefore(endOfMonth)) {
    days.push(day);
    day = moment(day).add(1, "day");
  }

  const dayClick = (day,index)=>{
    setActiveIndex(index);
    setSelectedDate(day);
    setDayOfWeek(day.format('dddd'))
  }

  return (
    <>
      <div className="container d-flex flex-column flex-xl-row">
        <div className="pe-0 pe-xl-5  w-xl-75 w-100 mb-5 calender">
          <ul className="d-flex t-primary fw-bold list-unstyled ps-3">
            <li>星期日</li>
            <li>星期一</li>
            <li>星期二</li>
            <li>星期三</li>
            <li>星期四</li>
            <li>星期五</li>
            <li>星期六</li>
            
          </ul>
          <div className="d-flex flex-wrap">
            {days.map((day,index) => (
              <DaySm
                key={day.format("DD/MM/YYYY")}
                date={day.format("D")}
                month={day.month() === date.month() ? "" : "month-other"}
                onClick={() => dayClick(day,index)}
                active={activeIndex === index}
              />
            ))}
          </div>
        </div>
        <div className="w-100 w-xl-25">
        <Day date={selectedDate} dayOfWeek = {dayOfWeek}/>
        </div>
      </div>
    </>
  );
}

export default Month;
