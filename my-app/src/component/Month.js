import React, { useState, useEffect } from "react";
import Day from "./Day";
import DaySm from "./DaySm";
import firebase from "../utils/firebase";
import "firebase/compat/firestore";
import moment from "moment-timezone";
import "moment/locale/zh-tw";

moment.tz.setDefault("Asia/Taipei");

function Month(props) {
  const { date} = props;
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const timestamp = selectedDate.valueOf() / 1000;
  const startOfDay = moment(timestamp * 1000).startOf("day");
  const endOfDay = moment(timestamp * 1000).endOf("day");

  // 讀取firebase資料
  const [userEmail, setUserEmail] = useState("");
  const [listData, setListData] = useState([]);
  const [smData, setSmData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //* 月曆部分
  const todayOfWeek = moment().format("dddd");
  const [dayOfWeek, setDayOfWeek] = useState(todayOfWeek);
  const startOfMonth = moment(date).startOf("month").startOf("week");
  const endOfMonth = moment(date).endOf("month").endOf("week");

  const days = [];
  let day = startOfMonth;
  while (day.isBefore(endOfMonth)) {
    days.push(day);
    day = moment(day).add(1, "day");
  }
  const todayIndex = days.findIndex((day) => day.isSame(today, "day"));
  const [activeIndex, setActiveIndex] = useState(todayIndex);

  const dayClick = (day, index) => {
    setActiveIndex(index);
    setSelectedDate(day);
    setDayOfWeek(day.format("dddd"));
  };
  const formattedDate = selectedDate.format("DD");

  //* user確認
  useEffect(() => {
    const userState = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return () => userState();
  }, []);

  //* Daysm
  useEffect(() => {
    if (!userEmail) {
      return; // 如果 userEmail 還沒被設定，不要進行資料庫操作
    }
    firebase
      .firestore()
      .collection("todolist")
      .where("user", "==", userEmail)
      .get()
      .then((querySnapshot) => {
        const newArray = [];
        querySnapshot.forEach((doc) => {
          const newItem = {
            id: doc.id,
            value: doc.data().thing,
            color: doc.data().color,
            date: doc.data().date,
          };
          newArray.push(newItem);
        });
        setSmData(newArray);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
      const groupDataByDate = () => {
        const dataByDate = {};
        smData.forEach((item) => {
          const dateStr = item.date.toDate().toLocaleDateString();
          console.log(dateStr);
          if (!dataByDate[dateStr]) {
            dataByDate[dateStr] = [];
          }
          dataByDate[dateStr].push(item);
        });
        return dataByDate;
      };
      const dateData = groupDataByDate();
  }, [userEmail]);

  const groupDataByDate = () => {
    const dataByDate = {};
    smData.forEach((item) => {
      const dateStr = item.date.toDate().toLocaleDateString();
      console.log(dateStr);
      if (!dataByDate[dateStr]) {
        dataByDate[dateStr] = [];
      }
      dataByDate[dateStr].push(item);
    });
    console.log(dataByDate);
    return dataByDate;
  };
  
  const dateData = groupDataByDate();


  //* Day資料
  useEffect(() => {
    if (!userEmail) {
      return; // 如果 userEmail 還沒被設定，不要進行資料庫操作
    }
    console.log(userEmail);
    setIsLoading(true);
    firebase
      .firestore()
      .collection("todolist")
      .where("user", "==", userEmail)
      .where("date", ">=", startOfDay.toDate())
      .where("date", "<=", endOfDay.toDate())
      .get()
      .then((querySnapshot) => {
        const newArray = [];
        querySnapshot.forEach((doc) => {
          const newItem = {
            id: doc.id,
            value: doc.data().thing,
            color: doc.data().color,
          };
          newArray.push(newItem);
          setListData(newArray);
          // console.log(doc.id, " => ", doc.data().thing);
        });
        setListData(newArray);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [selectedDate, userEmail]);

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
            {days.map((day, index) => (
              <DaySm
                key={day.format("DD/MM/YYYY")}
                date={day.format("D")}
                month={day.month() === date.month() ? "" : "month-other"}
                onClick={() => dayClick(day, index)}
                active={activeIndex === index}
                data={dateData[day.toDate().toLocaleDateString()]}
              />
            ))}
          </div>
        </div>
        <div className="w-100 w-xl-25">
          {isLoading ? (
            <div className="mx-2 flex-grow-1 d-flex flex-column justify-content-between">
              <div className="title t-primary">
                {formattedDate}
                <span className="fs-6 ms-1">/{dayOfWeek}</span>
              </div>
              <div className="wrap">
                <div className="h-100 loader d-flex justify-content-center align-items-center">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="24px"
                    height="30px"
                    viewBox="0 0 24 30"
                    style={{ enableBackground: "new 0 0 50 50" }}
                    xmlSpace="preserve"
                  >
                    <rect
                      x="0"
                      y="10"
                      width="4"
                      height="10"
                      fill="#333"
                      opacity="0.2"
                    >
                      <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="0.2; 1; .2"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="height"
                        attributeType="XML"
                        values="10; 20; 10"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        values="10; 5; 10"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      x="8"
                      y="10"
                      width="4"
                      height="10"
                      fill="#333"
                      opacity="0.2"
                    >
                      <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="0.2; 1; .2"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="height"
                        attributeType="XML"
                        values="10; 20; 10"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        values="10; 5; 10"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      x="16"
                      y="10"
                      width="4"
                      height="10"
                      fill="#333"
                      opacity="0.2"
                    >
                      <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="0.2; 1; .2"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="height"
                        attributeType="XML"
                        values="10; 20; 10"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        attributeType="XML"
                        values="10; 5; 10"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <Day
              date={selectedDate}
              dayOfWeek={dayOfWeek}
              listData={listData}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Month;
