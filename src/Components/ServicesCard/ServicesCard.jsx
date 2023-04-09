import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import ServicesModal from "../ServicesModal/ServicesModal";

const ServicesCard = ({
  cardTitle = " ",
  title,
  detail,
  information,
  buttonText,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Card
      title={cardTitle}
      bordered={false}
      className="shadow-lg border-2 border-gray-300"
    >
      <div className="flex flex-col items-center justify-center rounded-lg pt-1 px-6">
        <span className="xs:text-4xl lg:text-5xl text-center mb-3">
          <b>{title}</b>
        </span>
        <span className="text-base text-gray-400 text-center mb-3">
          {detail}
        </span>
        <span className="text-base text-black text-center my-8">
          {information}
        </span>
        <Button
          onClick={showModal}
          type="text"
          className="text-indigo-600 font-bold border-2 border-indigo-600 w-auto flex items-center justify-center"
        >
          {buttonText}
        </Button>
      </div>
      <ServicesModal
        cardTitle={cardTitle}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Card>
  );
};

export default ServicesCard;
