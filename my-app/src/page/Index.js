import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../component/Login";
import "../component/css/todo.css";
import Card from "../component/Card";
import "animate.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiNotion } from "react-icons/si";

function Index() {
  const [cardShow, setCardShow] = useState(false);
  const cardApper = () => {
    setCardShow(true);
  };
  return (
    <>
      <div className="banner d-flex flex-column justify-content-center align-items-center">
        <button className="banner-title" onClick={cardApper}>
          What TODO do?
        </button>
      </div>
      <div className="container d-none d-lg-flex justify-content-center mb-5">
        <Card
          icon={
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 32 32"
            >
              <path
                fill="#637ABF"
                d="M5.187 20.897l3.153-20.283c0.055-0.35 0.354-0.614 0.714-0.614 0.276 0 0.515 0.154 0.637 0.381l0.002 0.004 3.391 6.361zM27.58 25.819l-3.003-18.665c-0.060-0.345-0.357-0.604-0.714-0.604-0.199 0-0.379 0.080-0.51 0.21l0-0-18.933 19.059 10.476 5.904c0.304 0.174 0.669 0.277 1.058 0.277s0.754-0.103 1.069-0.282l-0.011 0.006zM19.067 9.531l-2.427-4.643c-0.123-0.232-0.364-0.387-0.64-0.387s-0.517 0.155-0.638 0.383l-0.002 0.004-10.653 19.091z"
              ></path>
            </svg>
          }
          title={"firebase資料庫"}
          text={
            "採用Firebase作為登入登出系統以及資料庫，提供使用者一個安全性高、可靠的代辦事項管理網頁。"
          }
          animate={cardShow}
        />
        <Card
          icon={
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 32 32"
            >
              <path
                fill="#637ABF"
                d="M28 30h-24c-1.104 0-2-0.896-2-2v-21c0-1.104 0.896-2 2-2h2v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h8v1c0 1.657 1.344 3 3 3s3-1.343 3-3v-1h2c1.104 0 2 0.896 2 2v21c0 1.104-0.896 2-2 2zM28 12h-24v16h24v-16zM13.069 19.829c0.197-0.314 0.296-0.646 0.296-0.993 0-0.773-0.416-1.16-1.248-1.16-0.723 0-1.414 0.287-2.074 0.861v-1.629c0.73-0.473 1.555-0.709 2.473-0.709 0.859 0 1.53 0.216 2.013 0.647s0.724 1.015 0.724 1.749c0 0.98-0.588 1.994-1.764 3.041l-1.729 1.535v0.035h3.41v1.535h-5.531v-1.441l2.408-2.303c0.484-0.464 0.825-0.853 1.022-1.168zM19.837 23.166c0.264-0.203 0.396-0.486 0.396-0.85 0-0.375-0.163-0.664-0.489-0.867s-0.774-0.305-1.345-0.305h-0.756v-1.418h0.697c1.094 0 1.641-0.363 1.641-1.090 0-0.684-0.42-1.025-1.26-1.025-0.562 0-1.109 0.182-1.641 0.545v-1.512c0.59-0.297 1.277-0.445 2.062-0.445 0.859 0 1.528 0.193 2.007 0.58s0.718 0.889 0.718 1.506c0 1.098-0.557 1.785-1.67 2.062v0.029c0.594 0.074 1.062 0.29 1.406 0.647s0.516 0.796 0.516 1.315c0 0.785-0.287 1.406-0.861 1.863s-1.367 0.686-2.379 0.686c-0.867 0-1.572-0.141-2.115-0.422v-1.611c0.562 0.41 1.219 0.615 1.969 0.615 0.472 0.002 0.84-0.1 1.104-0.303zM22.969 8c-1.088 0-1.969-0.881-1.969-1.969v-2.062c0-1.088 0.881-1.969 1.969-1.969s1.969 0.881 1.969 1.969v2.062c0 1.088-0.881 1.969-1.969 1.969zM8.969 8c-1.088 0-1.969-0.881-1.969-1.969v-2.062c0-1.088 0.881-1.969 1.969-1.969s1.969 0.881 1.969 1.969v2.062c0 1.088-0.882 1.969-1.969 1.969z"
              ></path>
            </svg>
          }
          title={"自製月曆"}
          text={
            "透過月曆介面選擇日期，建立代辦事項，並依照輕重緩急分類。讓使用者更加有效地規劃行程。"
          }
          animate={cardShow}
        />
        <Card
          icon={
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 32 32"
            >
              <path
                fill="#637ABF"
                d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"
              ></path>
            </svg>
          }
          title={"待辦事項管理"}
          text={
            "使用者可以建立、切換自己的代辦事項，讓使用者輕鬆地追蹤自己的進度。"
          }
          animate={cardShow}
        />
      </div>
      <div className="container d-lg-none d-flex mt-3 d-flex flex-column flex-sm-row">
        <div className="smCard mx-0 mx-sm-2 d-flex flex-column my-2 my-sm-0">
          <div className="d-flex flex-row flex-sm-column align-items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#637ABF"
                d="M5.187 20.897l3.153-20.283c0.055-0.35 0.354-0.614 0.714-0.614 0.276 0 0.515 0.154 0.637 0.381l0.002 0.004 3.391 6.361zM27.58 25.819l-3.003-18.665c-0.060-0.345-0.357-0.604-0.714-0.604-0.199 0-0.379 0.080-0.51 0.21l0-0-18.933 19.059 10.476 5.904c0.304 0.174 0.669 0.277 1.058 0.277s0.754-0.103 1.069-0.282l-0.011 0.006zM19.067 9.531l-2.427-4.643c-0.123-0.232-0.364-0.387-0.64-0.387s-0.517 0.155-0.638 0.383l-0.002 0.004-10.653 19.091z"
              ></path>
            </svg>
            <h6 className="mt-0 mt-sm-3 mb-0 ms-2 ms-sm-0">firebase資料庫</h6>
          </div>
          <p>
            採用Firebase作為登入登出系統以及資料庫，提供使用者一個安全性高、可靠的代辦事項管理網頁。
          </p>
        </div>
        <div className="smCard mx-0 mx-sm-2 d-flex flex-column my-2 my-sm-0">
          <div className="d-flex flex-row flex-sm-column align-items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#637ABF"
                d="M28 30h-24c-1.104 0-2-0.896-2-2v-21c0-1.104 0.896-2 2-2h2v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h8v1c0 1.657 1.344 3 3 3s3-1.343 3-3v-1h2c1.104 0 2 0.896 2 2v21c0 1.104-0.896 2-2 2zM28 12h-24v16h24v-16zM13.069 19.829c0.197-0.314 0.296-0.646 0.296-0.993 0-0.773-0.416-1.16-1.248-1.16-0.723 0-1.414 0.287-2.074 0.861v-1.629c0.73-0.473 1.555-0.709 2.473-0.709 0.859 0 1.53 0.216 2.013 0.647s0.724 1.015 0.724 1.749c0 0.98-0.588 1.994-1.764 3.041l-1.729 1.535v0.035h3.41v1.535h-5.531v-1.441l2.408-2.303c0.484-0.464 0.825-0.853 1.022-1.168zM19.837 23.166c0.264-0.203 0.396-0.486 0.396-0.85 0-0.375-0.163-0.664-0.489-0.867s-0.774-0.305-1.345-0.305h-0.756v-1.418h0.697c1.094 0 1.641-0.363 1.641-1.090 0-0.684-0.42-1.025-1.26-1.025-0.562 0-1.109 0.182-1.641 0.545v-1.512c0.59-0.297 1.277-0.445 2.062-0.445 0.859 0 1.528 0.193 2.007 0.58s0.718 0.889 0.718 1.506c0 1.098-0.557 1.785-1.67 2.062v0.029c0.594 0.074 1.062 0.29 1.406 0.647s0.516 0.796 0.516 1.315c0 0.785-0.287 1.406-0.861 1.863s-1.367 0.686-2.379 0.686c-0.867 0-1.572-0.141-2.115-0.422v-1.611c0.562 0.41 1.219 0.615 1.969 0.615 0.472 0.002 0.84-0.1 1.104-0.303zM22.969 8c-1.088 0-1.969-0.881-1.969-1.969v-2.062c0-1.088 0.881-1.969 1.969-1.969s1.969 0.881 1.969 1.969v2.062c0 1.088-0.881 1.969-1.969 1.969zM8.969 8c-1.088 0-1.969-0.881-1.969-1.969v-2.062c0-1.088 0.881-1.969 1.969-1.969s1.969 0.881 1.969 1.969v2.062c0 1.088-0.882 1.969-1.969 1.969z"
              ></path>
            </svg>
            <h6 className="mt-0 mt-sm-3 mb-0 ms-2 ms-sm-0">自製月曆</h6>
          </div>
          <p>
            透過月曆介面選擇日期，建立代辦事項，並依照輕重緩急分類。讓使用者更加有效地規劃行程。
          </p>
        </div>
        <div className="smCard mx-0 mx-sm-2 d-flex flex-column my-2 my-sm-0">
          <div className="d-flex flex-row flex-sm-column align-items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#637ABF"
                d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"
              ></path>
            </svg>
            <h6 className="mt-0 mt-sm-3 mb-0 ms-2 ms-sm-0">待辦事項管理</h6>
          </div>
          <p>
            使用者可以建立、切換自己的代辦事項，讓使用者輕鬆地追蹤自己的進度。
          </p>
        </div>
      </div>

      {/* About me */}
      <div className="container max-width d-flex flex-column align-items-center mb-5">
        <div className="about">—— &nbsp; About me &nbsp;——</div>
        <div className="about-wrap d-flex align-items-center flex-column flex-sm-row">
          <div className="marine me-0 me-sm-5">
            <img src={require("../img/marine.jpg")} alt="" />
          </div>
          <div>
            <h5 className="mb-2 mt-3 mt-sm-0">
              王海薇&nbsp;<span className="fs-6">Marine</span>
            </h5>
            <ul className="list-unstyled t-primary mb-0">
              <li>
                <BsFillTelephoneFill />
                <span className="ms-3">0975437605</span>
              </li>
              <li>
                <BsFillEnvelopeFill />
                <span className="ms-3">marine09028@gmail.com</span>
              </li>
              <ul
                className="d-flex mt-3 list-unstyled
              "
              >
                <li className="me-4">
                  <a
                    href="https://github.com/marine08042"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex"
                  >
                    <BsGithub size={24} />
                    <h5 className="ms-2">github</h5>
                  </a>
                </li>
                {/* <li className="me-4">
                  <a
                    href="https://www.instagram.com/marine_whw/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram size={28} />
                  </a>
                </li> */}
                <li className="me-4">
                  <a
                    href="https://cuboid-robe-e1d.notion.site/d72de29eda744d3f861819bada7f3d18"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex"
                  >
                    <SiNotion size={24} />
                    <h5 className="ms-2">學習筆記</h5>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      {/* work */}
      <div className="container max-width d-flex flex-column align-items-center mb-5">
        <div className="about">—— &nbsp; Other work &nbsp;——</div>
        <ul className=" list-unstyled d-flex flex-column flex-lg-row">
          <li className=" mx-3 my-3 my-lg-0">
            <a
              href="https://marine08042.github.io/orissic_hotpot/hotpot2.html"
              target="_blank"
              rel="noreferrer"
              className="a-work"
            >
              <ul className="deco list-unstyled mb-0">
                <li className="red"></li>
                <li className="yellow"></li>
                <li className="green"></li>
              </ul>
              <div className="work">
                <img src={require("../img/work1.png")} alt="work1" />
                <h6 className="mt-2">這一小鍋 靜態切版練習</h6>
              </div>
            </a>
          </li>
          <li className=" mx-3 my-3 my-lg-0">
            <a
              href="https://github.com/sungfang88/JOIN_react_final_project/tree/main/my-app/src/seat"
              target="_blank"
              rel="noreferrer"
              className="a-work"
            >
              <ul className="deco list-unstyled mb-0">
                <li className="red"></li>
                <li className="yellow"></li>
                <li className="green"></li>
              </ul>
              <div className="work">
                <img src={require("../img/work2.png")} alt="work1" />
                <h6 className="mt-2">Join 酒癮 資展國際小組作品</h6>
              </div>
            </a>
          </li>
          <li className=" mx-3 my-3 my-lg-0">
            <a
              href="https://exhibitonline.nmh.gov.tw/papercutting/index.html"
              target="_blank"
              rel="noreferrer"
              className="a-work"
            >
              <ul className="deco list-unstyled mb-0">
                <li className="red"></li>
                <li className="yellow"></li>
                <li className="green"></li>
              </ul>
              <div className="work">
                <img src={require("../img/work3.png")} alt="work1" />
                <h6 className="mt-2">國立歷史博物館「剪式生活」線上展</h6>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Index;
