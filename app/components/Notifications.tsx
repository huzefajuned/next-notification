"use client";
import { List } from "antd";
import React from "react";

// INTERFACE FOR NotificationsDataProps---
type NotificationsDataProps = {
  title: string;
  description: string;
  status: string;
  dateOfCreation: string;
};

// API DUMMY DATA---
const data: NotificationsDataProps[] = [
  {
    title: "Task Management App",
    description:
      "Develop a web application for managing tasks and deadlines  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Pending",
    dateOfCreation: "2023-05-24T04:05:10.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product  expand the product line.  Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-24T03:35:00.000Z",
  },
  {
    title: "Website Optimization",
    description:
      "Improve website performance and page loading speed  expand the product line.  Develop a web application for managing tasks and deadline.",
    status: "Pending",
    dateOfCreation: "2023-05-24T03:30:00.000Z",
  },

  {
    title: "Product Catalog Update",
    description:
      "Update the product catalog with new arrivals and pricing information  expand the product line.  Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-23T15:20:00.000Z",
  },
  {
    title: "Task Management App",
    description:
      "Develop a web application for managing tasks and deadlines  expand the product line.  Develop a web application for managing tasks and deadline.",
    status: "Pending",
    dateOfCreation: "2023-05-22T05:12:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Confirm",
    dateOfCreation: "2023-05-22T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-22T14:30:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Confirm",
    dateOfCreation: "2023-05-22T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-22T14:30:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Confirm",
    dateOfCreation: "2023-05-21T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-21T14:30:00.000Z",
  },

  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-20T14:30:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Confirm",
    dateOfCreation: "2023-05-20T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product.  expand the product line. Develop a web application for managing tasks and deadline.",
    status: "Created",
    dateOfCreation: "2023-05-20T14:30:00.000Z",
  },
];

//CALCULATING  TIME IN (SECONDS,MINUTES, HOURS, DAYS ) ---
function getTimeAgo(timestamp: any) {
  // PICKING SYSYTEM TIME
  const currentTimestamp = Date.now();

  const diffInSeconds = Math.floor((currentTimestamp - timestamp) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return `${diffInMinutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return `${diffInHours} hours ago`;
  } else {
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return `${diffInDays} days ago`;
  }
}

// GENERATING LIST OF NOTIFICATIONS  FOR SPECIFIC DATE
function generateListWithCategory() {
  const category: any = {};
  for (let item of data) {
    const createdDate = new Date(item.dateOfCreation);
    const checkCreatedDate = category[createdDate.toDateString()];

    if (!checkCreatedDate) {
      category[createdDate.toDateString()] = [];
      //CURRENT DATE FROM SYSYTEM
      const today = new Date();
      // CHANGING  dateOfCreation TO toLocaleDateString---
      const changeDateToLocalString = new Date(
        item.dateOfCreation
      ).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const item_elem = (
        <List.Item className=" flex flex-col" style={{ borderBottom: "none" }}>
          <>
            <span className="items-center w-full mb-1 text-bold  text-black text-lg text-left">
              {today.toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
                year: "numeric",
              }) === changeDateToLocalString
                ? "Today ,"
                : "Yesterday ,"}
              {changeDateToLocalString}
            </span>

            <p></p>
          </>
          <div
            className={`w-full  p-4 text-left  rounded-r-lg border-2 border-#D4D4D4" +
          ${
            item.status === "Pending"
              ? "border-l-4 border-l-yellow-600"
              : "" || item.status === "Created"
              ? "border-l-4 border-l-green-600"
              : "" || item.status === "Confirm"
              ? "border-l-4 border-l-blue-600"
              : ""
          }`}
          >
            <div className=" flex flex-row  justify-between">
              <h4 className="text-lg text-black">{item.title}</h4>
              <p className="text-gray-400">
                {getTimeAgo(new Date(item.dateOfCreation).getTime())}
              </p>
            </div>
            <p className="text-gray-400 racking-wide"> {item.description}</p>
          </div>
        </List.Item>
      );
      category[createdDate.toDateString()].push(item_elem);
    } else {
      const item_elem = (
        <List.Item className=" flex flex-col " style={{ borderBottom: "none" }}>
          <div
            className={`w-full  p-4 text-left  rounded-r-lg border-2 border-#D4D4D4" +
          ${
            item.status === "Pending"
              ? "border-l-4 border-l-yellow-600"
              : "" || item.status === "Created"
              ? "border-l-4 border-l-green-600"
              : "" || item.status === "Confirm"
              ? "border-l-4 border-l-blue-600"
              : ""
          }`}
          >
            <div className=" flex flex-row  justify-between">
              <h4 className="text-lg text-black">{item.title}</h4>

              <p className="text-gray-400">
                {getTimeAgo(new Date(item.dateOfCreation).getTime())}
              </p>
            </div>
            <p className="text-gray-400 racking-wide"> {item.description}</p>
          </div>
        </List.Item>
      );
      checkCreatedDate.push(item_elem);
    }
  }
  return Object.values(category).flat(1);
}

const Notifications: React.FC = () => {
  return (
    <List
      className="h-full"
      itemLayout="horizontal"
      dataSource={generateListWithCategory()}
      pagination={{ pageSize: 4 }}
      renderItem={(item, index) => item as any}
    />
  );
};

export default Notifications;
