import React from "react";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="px-8 md:px-12 xl:px-60 bg-no-repeat flex flex-col gap-6 
        h-4/6 md:h-screen border-t border-b border-white  bg-gradient"
    >
      <span className="mt-24 text-3xl text-center pt-12 pb-6 text-gray-700">
        <h2 className="xs:text-2xl md:text-6xl pt-2 text-white">
          MEET OUR TEAM
        </h2>
      </span>
      <div className="flex xs:flex-col md:flex-row items-center justify-between">
        <TeamMemberCard
          name="Sam Crews"
          title="CEO"
          circleImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4U35mqeKC-kziI34yKA-g95evIHw9cWyk47l81JNKhFaxvoXDwypyMDDxU7bheyAdy4Q&usqp=CAU"
          mainImgSrc=""
        />
        <TeamMemberCard
          name="Reginald Cray"
          title="VP"
          circleImgSrc="https://storage.needpix.com/rsynced_images/colorful-1508769404Kb7.jpg"
          mainImgSrc=""
        />
        <TeamMemberCard
          name="Ethan Hunt"
          title="Manager"
          circleImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxIRy5qKBeaScB5YkoqedDk5NtOeogwT1Vz7t3okAZX_hsU0kk5zM7ekfzpMTAd6np7Q&usqp=CAU"
          mainImgSrc=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
