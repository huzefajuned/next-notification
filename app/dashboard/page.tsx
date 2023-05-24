"use client";
import { Typography } from "antd";
import React, { useState } from "react";
import Notiications from "../components/Notifications";
import Activities from "../components/Activities";
import { StarOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Page = () => {
  // FOR TOGGLING BETWEEN NOTIFICATION & ACTIVITIES COMPONENTS TAB---
  const [isSelectedActivities, setIsSelectedActivities] =
    useState<boolean>(true);

  return (
    <div className=" text-seconadry-90 w-full h-screen flex flex-row  overflow-hidden">
      {/* LEFT SIDE ICONS AND SIDE-MENU COMPONENT  INSIDE DASHBOARD*/}
      <div className="bg-gray-100  flex flex-row text-center justify-center items-center">
        <div className="w-14">icons</div>
        <div className="w-64">side nav</div>
      </div>
      <div className=" w-full h-full p-10">
        {/* HEADER COMPONENT INSIDE DASHBOARD */}
        <div className=" h-28 flex flex-col">
          <div className=" flex flex-row h-12">
            <Title className="" style={{ fontWeight: "250", fontSize: "32px" }}>
              Notifications
            </Title>
            <StarOutlined
              className="w-20 h-10 mt-1"
              style={{
                fontSize: "32px",
                color: "gray",
                fontWeight: "200",
              }}
            />
          </div>
          <div className="">
            <span>Dashboard </span> |
            <span className="cursor-pointer text-blue-900">
              {isSelectedActivities ? "Notifications" : "Activities"}
            </span>
          </div>
        </div>
        <div className="text-center justify-center items-center h-full">
          <div className="flex flex-row border-b-2 p-b-2 border-gray-100 font-semibold">
            <h2
              onClick={() => setIsSelectedActivities(true)}
              className={`cursor-pointer  tracking-wide	 + ${
                isSelectedActivities
                  ? "border-b-2 border-blue-700 text-blue-600"
                  : ""
              } `}
            >
              Notifications
            </h2>
            <h2
              onClick={() => setIsSelectedActivities(false)}
              className={`cursor-pointer ml-10  tracking-wide	 + ${
                isSelectedActivities
                  ? ""
                  : "border-b-2 border-blue-700 text-blue-600"
              }`}
            >
              Activities
            </h2>
          </div>
          <div className="h-full">
            {isSelectedActivities ? <Notiications /> : <Activities />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
