<<<<<<< Updated upstream
import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import AboutUsContent from "../components/AboutUsContent";
import OurService from "../components/OurService";

export default function AboutUs() {
  return (
    <>
      <AboutUsSection />
      <AboutUsContent />
      <OurService />
    </>
=======
import "./AboutUs.css";

//components
import OurServiceItem from "../components/OurServiceItem";
import PageSection from "../components/PageSection/PageSection";
import StyleItem from "../components/StyleItem";

export default function AboutUs() {
  const items = [
    {
      image: "images/img-service1.png",
      alt: "Image 1",
    },
    {
      image: "images/img-service2.png",
      alt: "Image 2",
    },
    {
      image: "images/img-service3.png",
      alt: "Image 3",
    },
    {
      image: "images/img-service4.png",
      alt: "Image 4",
    },
  ];

  return (
    <div className="about-us-screen">
      <div className="about-us-screen-header">
        <PageSection
          imageUrl={"/images/img-about-us.jpeg"}
          title={"About Us"}
        ></PageSection>
      </div>

      <div className="about-us-screen-content">
        <div className="about-us-container">
          <div className="about-us-content">
            <div className="about-us-content-text">
              <div className="au-1">
                <h2>Lorem ipsum dolor sit amet</h2>
                <div className="title-div">
                  <StyleItem
                    width={"100px"}
                    height={"3px"}
                    marginTop={"10px"}
                    marginBottom={"10px"}
                  />
                </div>
                <h3>
                  Nam viverra id felis eget scelerisque. Aliquam mi massa, porta
                  eu scelerisque eu, sagittis in sem. Praesent eget ante ac
                  ligula placerat ornare a et urna.
                </h3>
                <StyleItem
                  width={"150px"}
                  height={"3px"}
                  marginBottom={"10px"}
                />
                <h5>
                  {" "}
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent eleifend id erat sed
                  mollis. Aliquam sodales blandit mi eget congue. Nulla sit amet
                  erat tincidunt, cursus arcu quis, placerat libero. Morbi
                  tincidunt ipsum nec eros condimentum iaculis. Duis blandit
                  risus vitae enim mattis facilisis. Nullam eu quam
                  sollicitudin, pretium sem vitae, egestas nulla. Duis nisl
                  velit, fringilla at nisi in, suscipit congue est. Etiam urna
                  ante, imperdiet non bibendum id, vestibulum vel enim. Integer
                  ut dui arcu. Aliquam erat volutpat. Sed sit amet risus quis
                  leo viverra aliquam. Donec ac pulvinar nibh, a lobortis orci.
                  Aliquam nec metus vel augue aliquet lacinia. Sed sagittis
                  sollicitudin mauris, vitae pulvinar est viverra vitae.
                  Phasellus euismod id augue ac semper. Fusce ut sem dapibus,
                  dapibus urna pretium, molestie massa. Sed vulputate erat vitae
                  laoreet iaculis. Sed rhoncus eros ut dictum scelerisque.
                  Pellentesque molestie commodo ligula vitae malesuada. In
                  imperdiet et nibh nec egestas. Aliquam fringilla viverra velit
                  vitae suscipit. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h5>

                <div className="au-content-title-div">
                  <StyleItem
                    width={"150px"}
                    height={"3px"}
                    marginTop={"10px"}
                    marginBottom={"20px"}
                  />
                </div>
              </div>
            </div>

            <PageSection
              imageUrl={"/images/img-about-us-coffee.jpg"}
              title={"We Serve Happiness!!"}
            ></PageSection>

            <div className="about-us-content-service">
              <div className="service-container">
                <div className="service-items">
                  {items.map((item) => (
                    <OurServiceItem image={item.image} alt={item.alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> Stashed changes
  );
}
