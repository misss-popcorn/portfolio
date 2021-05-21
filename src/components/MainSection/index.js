import React from "react";

const MainSection = () => {
  const landingText = React.useRef("This is not a bug");
  const onMouseEnter = () => {
    landingText.current = "This is a feature!";
  };
  const onMouseLeave = () => {
    landingText.current = "This is not a bug";
  };
  return (
    <section className="section">
      <div
        className="container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className=" card-profile shadow">
          <div className="px-4">
            {/* <div className="text-center mt-5 glow">{landingText.current}</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
