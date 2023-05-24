"use client";
import { List } from "antd";
import React from "react";

type NotificationsDataProps = {
  title: string;
  description: string;
  status: string;
  dateOfCreation: string;
};

const data: NotificationsDataProps[] = [
  {
    title: "Task Management App",
    description:
      "Develop a web application for managing tasks and deadlines  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T12:40:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns  expand the product line. ",
    status: "Confirm",
    dateOfCreation: "2023-05-23T12:30:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-05-23T12:00:00.000Z",
  },
  {
    title: "Website Optimization",
    description:
      "Improve website performance and page loading speed  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T02:30:00.000Z",
  },

  {
    title: "Product Catalog Update",
    description:
      "Update the product catalog with new arrivals and pricing information  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-03-02T11:30:00.000Z",
  },
  {
    title: "Task Management App",
    description:
      "Develop a web application for managing tasks and deadlines  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T05:12:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns.  expand the product line",
    status: "Confirm",
    dateOfCreation: "2023-04-28T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product.  expand the product line",
    status: "Created",
    dateOfCreation: "2023-03-15T14:30:00.000Z",
  },
  {
    title: "Website Optimization",
    description:
      "Improve website performance and page loading speed  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-05T09:45:00.000Z",
  },
  {
    title: "Product Catalog Update",
    description:
      "Update the product catalog with new arrivals and pricing information  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-05-22T15:30:00.000Z",
  },
  {
    title: "Customer Feedback Analysis",
    description:
      "Analyze customer feedback and identify areas for improvement  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-02-20T12:00:00.000Z",
  },
  {
    title: "Inventory Management System",
    description:
      "Develop a software system for efficient inventory management  expand the product line.",
    status: "Confirm",
    dateOfCreation: "2023-01-15T08:30:00.000Z",
  },

  {
    title: "Website Redesign",
    description:
      "Redesign the website for improved user experience and modern look  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-22T15:30:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-05-23T05:01:10.000Z",
  },
  {
    title: "Website Optimization",
    description:
      "Improve website performance and page loading speed expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T02:30:00.000Z",
  },

  {
    title: "Product Catalog Update",
    description:
      "Update the product catalog with new arrivals and pricing information  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-03-02T11:30:00.000Z",
  },
  {
    title: "Task Management App",
    description:
      "Develop a web application for managing tasks and deadlines  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T05:12:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns  expand the product line.",
    status: "Confirm",
    dateOfCreation: "2023-04-28T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-03-15T14:30:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-05-23T05:01:10.000Z",
  },
  {
    title: "Website Optimization",
    description:
      "Improve website performance and page loading speed  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T02:30:00.000Z",
  },

  {
    title: "Product Catalog Update",
    description:
      "Update the product catalog with new arrivals and pricing information  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-03-02T11:30:00.000Z",
  },
  {
    title: "Task Management App",
    description:
      "Develop a web application for managing tasks and deadlines  expand the product line.",
    status: "Pending",
    dateOfCreation: "2023-05-23T05:12:00.000Z",
  },
  {
    title: "Sales Report Analysis",
    description:
      "Analyze monthly sales reports and identify trends and patterns  expand the product line.",
    status: "Confirm",
    dateOfCreation: "2023-04-28T10:00:00.000Z",
  },
  {
    title: "Product Packaging Redesign",
    description:
      "Revamp the packaging design for our flagship product  expand the product line.",
    status: "Created",
    dateOfCreation: "2023-03-15T14:30:00.000Z",
  },
  {
    title: "New Product Development",
    description:
      "Research and develop a new product to expand the product line  expand the product line.",
    status: "Confirm",
    dateOfCreation: "2023-05-22T15:30:00.000Z",
  },
];

// FUNCTION FOR TIME----

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

const Notifications: React.FC = () => {
  return (
    <List
      className="h-full mt-5"
      itemLayout="horizontal"
      dataSource={data}
      pagination={{ pageSize: 4 }}
      renderItem={(item, index) => (
        <List.Item className=" " style={{ borderBottom: "none" }}>
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
            <div className=" flex flex-row  justify-between ">
              <h4 className="text-lg text-black">{item.title}</h4>{" "}
              <p className="">
                {getTimeAgo(new Date(item.dateOfCreation).getTime())}
              </p>
            </div>
            <p className="text-gray-400 racking-wide"> {item.description}</p>
          </div>
        </List.Item>
      )}
    />
  );
};

export default Notifications;
