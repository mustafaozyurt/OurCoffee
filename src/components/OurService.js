import React from "react";
import OurServiceItem from "./OurServiceItem";
import "./OurService.css";

function OurService() {
  return (
    <div className="service-container">
      <h1>This is how we serve...</h1>
      <div className="title-div">
        <div
          style={{
            width: "250px",
            height: "3px",
            background: "#e68541",
            marginTop: "10px",
            marginBottom: "50px",
          }}
        ></div>
      </div>
      <div className="service-items">
        <OurServiceItem
          image="images/img-service1.png"
          alt="Image 1"
          title="Lorem Ipsum 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet erat tincidunt, cursus arcu quis, placerat libero."
        />
        <OurServiceItem
          image="images/img-service2.png"
          alt="Image 2"
          title="Lorem Ipsum 2"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet erat tincidunt, cursus arcu quis, placerat libero."
        />

        <OurServiceItem
          image="images/img-service3.png"
          alt="Image 3"
          title="Lorem Ipsum 3"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet erat tincidunt, cursus arcu quis, placerat libero."
        />
        <OurServiceItem
          image="images/img-service4.png"
          alt="Image 4"
          title="Lorem Ipsum 4"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet erat tincidunt, cursus arcu quis, placerat libero."
        />
      </div>
    </div>
  );
}

export default OurService;
