import React,{useState} from 'react'
import Day from './Day'
import DaySm from './DaySm'
import moment from 'moment'

function Month(props) {
  // const currentDate = new Date();
  // currentDate.setDate(1);
  // const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  // const firstDayOfMonth = currentDate.getDay();
  const {date,setDate}=props;

  const startOfMonth = moment(date).startOf("month").startOf("week");
    const endOfMonth = moment(date).endOf("month").endOf("week");

    const days = []; // 建立一個空陣列用來儲存日期物件

    let day = startOfMonth; // 起始日期為該月份的第一個星期日

    // 使用 while 迴圈將日期物件推進到該月份的最後一天（endOfMonth）
    while (day.isBefore(endOfMonth)) {
      days.push(day); // 將日期物件推進 days 陣列中
      day = moment(day).add(1, "day"); // 推進日期物件一天
    }
  
  return (
    <>
      <div className="container d-flex flex-column flex-xl-row">
        <div className='pe-0 pe-xl-5  w-xl-75 w-100 mb-5 calender'>
          <ul  className="d-flex t-primary fw-bold list-unstyled ps-3">
            <li>星期一</li>
            <li>星期二</li>
            <li>星期三</li>
            <li>星期四</li>
            <li>星期五</li>
            <li>星期六</li>
            <li>星期日</li>
          </ul>
          <div className="d-flex flex-wrap">
            {/* <div className='invisible d-flex flex-wrap'>
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <DaySm key={index} date={index + 1}/>
              ))}
            </div> */}
            {days.map((day) => (
              <DaySm key={day.format("DD/MM/YYYY")} date={day.format("D")} month={day.month() === date.month()? "": "month-other"}/>
            ))}
        </div>
        </div>
        <div className="w-100 w-xl-25">
          <Day/>
        </div>
      </div>
    </>
  )
}

export default Month