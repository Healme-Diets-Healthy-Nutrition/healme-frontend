import React from "react";

const MainPage: React.FC = () => {
  return (
    <>
      <section className="w-full h-72">
        <div className="w-69 h-39 z-10 absolute bg-white-smoke ml-112 mt-13 content-center justify-center">
          <h5 className="text-xl text-rose-taupe text-center">
            Science based nutrition
          </h5>
          <p className="text-center">
            We encourage people to eat healthy and affordable
          </p>
        </div>
        <img src="/src/assets/images/MainPage/Emotiwaves.png" alt="pic" className="w-full"/>
      </section>
      <section className="m-6 mb-20">
        <h2 className="text-3xl font-regular text-center mb-14">Our priorities</h2>
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
      <section className="w-full bg-linen py-16 px-4">
  <div className="max-w-screen-lg mx-auto">
    <div className="w-full bg-old-rose text-2xl text-center flex items-center justify-center py-6 rounded-md mb-12">
      <h1 className="text-black font-regular">How can we help you?</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center p-6 gap-y-4">
        <div className="w-28 h-28 bg-old-rose rounded-full flex items-center justify-center">
          <img
            src="/src/assets/images/Mainpage/new-features_10435175.png"
            alt="Information Icon"
            className="w-16 h-16"
          />
        </div>
        <p className="text-gray-700 text-sm">We provide the latest and valuable information about food.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center p-6 gap-y-4">
        <div className="w-28 h-28 bg-old-rose rounded-full flex items-center justify-center">
          <img
            src="/src/assets/images/Mainpage/gear_3088881.png"
            alt="Automation Icon"
            className="w-16 h-16"
          />
        </div>
        <p className="text-gray-700 text-sm">Automation for choosing meals and snacks.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center p-6 gap-y-4">
        <div className="w-28 h-28 bg-old-rose rounded-full flex items-center justify-center">
          <img
            src="/src/assets/images/Mainpage/delivery-truck_316567.png"
            alt="Delivery Icon"
            className="w-16 h-16"
          />
        </div>
        <p className="text-gray-700 text-sm">Delivery options with a variety of diets.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center p-6 gap-y-4">
        <div className="w-28 h-28 bg-old-rose rounded-full flex items-center justify-center">
          <img
            src="/src/assets/images/Mainpage/pie-chart_8352720.png"
            alt="Statistics Icon"
            className="w-16 h-16"
          />
        </div>
        <p className="text-gray-700 text-sm">Statistics on your diet and journaling money spending.</p>
      </div>
    </div>
  </div>
</section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto my-8 w-fit max-w-screen-lg">
  <div className="bg-grayish-red rounded-b-xl overflow-hidden shadow-lg">
    <div className="w-full aspect-w-4 aspect-h-3">
      <img
        src="/src/assets/images/MainPage/Almond-Orange-Healthy-Granola-Bars-with-Coconut-and-Honey-500x375.jpg"
        alt="12 Healthy Granola Bars"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">
      Article
    </div>
    <p className="text-white-smoke mx-3 mt-2">12 Healthy Granola Bars</p>
  </div>
  <div className="bg-grayish-red rounded-b-xl overflow-hidden shadow-lg">
    <div className="w-full aspect-w-4 aspect-h-3">
      <img
        src="/src/assets/images/Mainpage/cf189f61d1b1221fe0ca3eac18dfc218639d5384.webp"
        alt="The 7 Best Rice Cookers for Perfect Rice Every Time"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">
      Article
    </div>
    <p className="text-white-smoke mx-3 mt-2">
      The 7 Best Rice Cookers for Perfect Rice Every Time
    </p>
  </div>
  <div className="bg-grayish-red rounded-b-xl overflow-hidden shadow-lg">
    <div className="w-full aspect-w-4 aspect-h-3">
      <img
        src="/src/assets/images/Mainpage/fish_food_omega_image_one-750x422.jpg"
        alt="Benefits of Eating Fish"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">
      Article
    </div>
    <p className="text-white-smoke mx-3 mt-2">Benefits of Eating Fish</p>
  </div>
  <div className="bg-grayish-red rounded-b-xl overflow-hidden shadow-lg">
    <div className="w-full aspect-w-4 aspect-h-3">
      <img
        src="/src/assets/images/Mainpage/spices_good_1-750x468.jpg"
        alt="The Healthiest Spices You Can Use Every Day"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="w-12 h-8 bg-rose-taupe rounded-2xl text-xs text-white-smoke flex items-center justify-center mt-3 ml-3">
      Article
    </div>
    <p className="text-white-smoke mx-3 mt-2">
      The Healthiest Spices You Can Use Every Day
    </p>
  </div>
</section>
<div className="mb-8">
  <img
    src="/src/assets/images/Mainpage/lawrence-kayku-ZVKr8wADhpc-unsplash.jpg"
    alt="banner"
    className="w-screen h-96 object-cover"
  />
</div>

    </>
  );
};

export default MainPage;
