import React from "react";
import "./AboutUsContent.css";

function AboutUsContent() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="au-1">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="title-div">
            <div
              style={{
                width: "250px",
                height: "3px",
                background: "#e68541",
                marginTop: "10px",
                marginBottom: "30px",
              }}
            ></div>
          </div>
          <h3>
            Nam viverra id felis eget scelerisque. Aliquam mi massa, porta eu
            scelerisque eu, sagittis in sem. Praesent eget ante ac ligula
            placerat ornare a et urna.
          </h3>
          <div
            style={{
              width: "150px",
              height: "3px",
              background: "#e68541",
              marginBottom: "10px",
            }}
          ></div>
          <h5>
            {" "}
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Praesent eleifend id erat sed mollis.
            Aliquam sodales blandit mi eget congue. Nulla sit amet erat
            tincidunt, cursus arcu quis, placerat libero. Morbi tincidunt ipsum
            nec eros condimentum iaculis. Duis blandit risus vitae enim mattis
            facilisis. Nullam eu quam sollicitudin, pretium sem vitae, egestas
            nulla. Duis nisl velit, fringilla at nisi in, suscipit congue est.
            Etiam urna ante, imperdiet non bibendum id, vestibulum vel enim.
            Integer ut dui arcu. Aliquam erat volutpat. Sed sit amet risus quis
            leo viverra aliquam. Donec ac pulvinar nibh, a lobortis orci.
            Aliquam nec metus vel augue aliquet lacinia. Sed sagittis
            sollicitudin mauris, vitae pulvinar est viverra vitae. Phasellus
            euismod id augue ac semper. Fusce ut sem dapibus, dapibus urna
            pretium, molestie massa. Sed vulputate erat vitae laoreet iaculis.
            Sed rhoncus eros ut dictum scelerisque. Pellentesque molestie
            commodo ligula vitae malesuada. In imperdiet et nibh nec egestas.
            Aliquam fringilla viverra velit vitae suscipit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </h5>

          <div className="au-content-title-div">
            <div
              style={{
                width: "150px",
                height: "3px",
                background: "#e68541",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            ></div>
          </div>
        </div>

        <div className="centered-image"></div>
        <div className="img-div">
          <div
            style={{
              width: "50%",
              height: "3px",
              background: "#e68541",
              marginBottom: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
