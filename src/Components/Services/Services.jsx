import React from "react";
import {  Col, Row } from "antd";
import ServicesCard from "../ServicesCard/ServicesCard";
import bgImage from "../../shared/assests/servicesBg.jpg";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="relative px-8 md:px-12 xl:px-60 bg-cover bg-no-repeat bg-center flex flex-col gap-6 
        h-4/6 md:h-screen border-t border-b border-black"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <span className=" text-3xl text-center pt-12 pb-6 text-gray-700">
          <h2 className="pt-2 text-mattBlack">Services</h2>
        </span>
        <Row gutter={16} className="flex items-center justify-center">
          <Col
            span={24}
            md={8}
            className="mb-3 flex items-center justify-center"
          >
            <ServicesCard
              title="Factoring"
              detail="This is factoring"
              information="Start learning about factoring with this information"
              buttonText="Learn More"
            />
          </Col>
          <Col
            span={24}
            md={8}
            className="mb-3 flex items-center justify-center"
          >
            <ServicesCard
              title="Dispatch"
              detail="This is Dispath"
              information="Start learning about dispatch with this information"
              buttonText="Learn More"
            />
          </Col>
          <Col span={24} md={8} className="mb-3">
            <ServicesCard
              title="Insurance"
              detail="This is Insurance"
              information="Start learning about dispatch with this information"
              buttonText="Learn More"
            />
          </Col>
          <Col span={24} md={8} className="mb-3">
            <ServicesCard
              title="ELD"
              detail="This is ELD"
              information="Start learning about dispatch with this information"
              buttonText="Learn More"
            />
          </Col>
          <Col span={24} md={8} className="mb-3">
            <ServicesCard
              title="Compliance"
              detail="This is Compliance"
              information="Start learning about dispatch with this information"
              buttonText="Learn More"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Services;
