import React from "react";
import "./Services.css";
import {
  CopyOutlined,
  FormOutlined,
  FundOutlined,
  RiseOutlined,
  SettingFilled,
} from "@ant-design/icons";

const Services = () => {
  return (
    <section id="services" className="bg-servicesGradient h-4/6 md:h-screen">
      <span className=" text-3xl text-center pt-12 pb-6 text-gray-700">
        <h2 className="xs:text-2xl md:text-6xl pt-2 text-white">
          WHAT WE OFFER
        </h2>
      </span>
      <div className="row flex items-center justify-center">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <SettingFilled />
            </div>
            <h3>Factoring</h3>
            <p>
              Expert support in finding a reliable factoring partner that meets
              your specific needs.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <RiseOutlined />
            </div>
            <h3>Dispatch</h3>
            <p>
              Get 24/7 dispatcher support with transparent pricing
              starting from just 5% of gross.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FundOutlined />
            </div>
            <h3>Insurance</h3>
            <p>
              Save on insurance costs by leveraging our network of 25+ insurance
              companies.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FormOutlined />
            </div>
            <h3>ELD</h3>
            <p>
              Comprehensive services to ensure compliance with FMCSA/DoT
              regulations.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <CopyOutlined />
            </div>
            <h3>Compliance</h3>
            <p>Meet the truck ELD requirements for drivers logs and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
