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
      <section className="grid grid-cols-2 gap-4 mx-auto my-8 w-fit">
        <div className="w-131 h-120 bg-grayish-red  rounded-b-xl">
          <img src="/src/assets/images/MainPage/Almond-Orange-Healthy-Granola-Bars-with-Coconut-and-Honey-500x375.jpg" alt="pic" className="w-131" />
          <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">Article</div>
          <p className="text-white-smoke mx-3 mt-2">12 Healthy Granola Bars</p>
        </div>
        <div className="w-131 h-120 bg-grayish-red  rounded-b-xl">
          <img src="\src\assets\images\Mainpage\cf189f61d1b1221fe0ca3eac18dfc218639d5384.webp" alt="pic" className="w-131" />
          <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">Article</div>
          <p className="text-white-smoke mx-3 mt-2">The 7 Best Rice Cookers for Perfect Rice Every Time</p>
        </div>
        <div className="w-131 h-120 bg-grayish-red  rounded-b-xl">
          <img src="\src\assets\images\Mainpage\fish_food_omega_image_one-750x422.jpg" alt="pic" className="w-131 h-[453px]" />
          <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">Article</div>
          <p className="text-white-smoke mx-3 mt-2">Benefits of Eating Fish</p>
        </div>
        <div className="w-131 h-120 bg-grayish-red  rounded-b-xl">
          <img src="\src\assets\images\Mainpage\spices_good_1-750x468.jpg" alt="pic" className="w-131 h-[453px]" />
          <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">Article</div>
          <p className="text-white-smoke mx-3 mt-2">The Healthiest Spices You Can Use Every Day</p>
        </div>
      </section>
      <div className="mb-8">
        <img src="\src\assets\images\Mainpage\lawrence-kayku-ZVKr8wADhpc-unsplash.jpg" alt="pic" className="w-screen h-96 object-cover" />
      </div>
    </>
  );
};

export default MainPage;
