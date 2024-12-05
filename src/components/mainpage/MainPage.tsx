import React from "react";

const MainPage: React.FC = () => {
  return (
    <>
      <section className="w-full h-77 mt-1">
        <div className="w-69 h-39 z-10 absolute bg-white-smoke ml-112 mt-13 content-center justify-center">
          <h5 className="text-xl text-rose-taupe text-center">
            Science based nutrition
          </h5>
          <p className="text-center">
            We encourage people to eat healthy and affordable
          </p>
        </div>
        <img src="/src/assets/images/MainPage/Emotiwaves.png" alt="pic" />
      </section>
      <section className="m-3 mb-23">
        <h2 className="text-3xl text-center mb-14">Our priorities</h2>
        <div className="flex justify-between mx-84 gap-30">
          <div className="w-50 flex flex-col items-center text-center">
            <div className="w-25 h-25 rounded-full bg-white-smoke border border-light-grayish-orange">
              <img
                src="/src/assets/images/MainPage/knowledge_9793040.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Tackling food and nutrition illiteracy</p>
          </div>
          <div className="w-50 flex flex-col items-center text-center">
            <div className="w-25 h-25 rounded-full bg-white-smoke border border-light-grayish-orange">
              <img
                src="\src\assets\images\Mainpage\project-management_4844342.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Organized and well managed meal timing</p>
          </div>
          <div className="w-50 flex flex-col items-center text-center">
            <div className="w-25 h-25 rounded-full bg-white-smoke border border-light-grayish-orange">
              <img
                src="\src\assets\images\Mainpage\diet_706195.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Encouraging to eat more healthy </p>
          </div>
          <div className="w-50 flex flex-col items-center text-center">
            <div className="w-25 h-25 rounded-full bg-white-smoke border border-light-grayish-orange">
              <img
                src="\src\assets\images\Mainpage\promotion_3234909.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Promotion the idea of snacking with fruits and vegetables</p>
          </div>
        </div>
      </section>
      <section className="w-full h-128 bg-linen p-1">
        <div className="w-112 h-24 bg-old-rose text-2xl text-center flex items-center justify-center ml-84 my-14">
          <h1>How can we help you?</h1>
        </div>
        <div className="flex justify-between mx-84 gap-8">
          <div className="w-73 h-79 bg-white flex flex-col items-center text-center p-5 justify-center gap-y-5">
            <div className="w-28 h-28 bg-old-rose rounded-full">
              <img
                src="\src\assets\images\Mainpage\new-features_10435175.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>we provide latest and valuable information about food</p>
          </div>
          <div className="w-73 h-79 bg-white flex flex-col items-center text-center p-5 justify-center gap-y-5">
            <div className="w-28 h-28 bg-old-rose rounded-full">
              <img
                src="\src\assets\images\Mainpage\gear_3088881.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Automation on choosing meals and snack</p>
          </div>
          <div className="w-73 h-79 bg-white flex flex-col items-center text-center p-5 justify-center gap-y-5">
            <div className="w-28 h-28 bg-old-rose rounded-full">
              <img
                src="\src\assets\images\Mainpage\delivery-truck_316567.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Delivery options with variety diets</p>
          </div>
          <div className="w-73 h-79 bg-white flex flex-col items-center text-center p-5 justify-center gap-y-5">
            <div className="w-28 h-28 bg-old-rose rounded-full">
              <img
                src="\src\assets\images\Mainpage\pie-chart_8352720.png"
                alt="pic"
                className="scale-75"
              />
            </div>
            <p>Statistics on your diet and journaling money spending</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
