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
    <section id="services" className="bg-servicesGradient">
      <span className=" text-3xl text-center pt-12 pb-6 text-gray-700">
        <h2 className="pt-2 text-white">WHAT WE OFFER</h2>
      </span>
      <div className="row flex items-center justify-center">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <SettingFilled />
            </div>
            <h3>Factoring</h3>
            <p>Factoring Details will be added here.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <RiseOutlined />
            </div>
            <h3>Dispatch</h3>
            <p>Dipatch Details will be added here.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FundOutlined />
            </div>
            <h3>Insurance</h3>
            <p>Insurance Details will be added here.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FormOutlined />
            </div>
            <h3>ELD</h3>
            <p>ELD Details will be added here.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <CopyOutlined />
            </div>
            <h3>Compliance</h3>
            <p>Compliance details will be added here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
