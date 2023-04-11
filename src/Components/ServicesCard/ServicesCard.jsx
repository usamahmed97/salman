import React from "react";
import { Card } from "antd";

const ServicesCard = ({ cardTitle = "", title, detail, information }) => {
  return (
    <Card
      title={cardTitle}
      bordered={false}
      className="shadow-lg border-2 border-gray-300"
    >
      <div className="flex flex-col items-center justify-center rounded-none pt-1 px-6">
        <span className="xs:text-4xl lg:text-5xl text-center mb-3">
          <b>{title}</b>
        </span>
        <span className="text-base text-gray-400 text-center mb-3">
          {detail}
        </span>
        <span className="text-base text-black text-center my-8">
          {information}
        </span>
      </div>
    </Card>
  );
};

export default ServicesCard;
