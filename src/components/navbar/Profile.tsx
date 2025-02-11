import React, { useState } from "react";
import Modal from "../modal/index.tsx";
import MyButton from "../buttons/MyButton.tsx";
import IconApple from "../../assets/icons/brandIcons/socials/devicon--apple.svg?react";
import IconFaceBook from "../../assets/icons/brandIcons/socials/devicon--facebook.svg?react";
import IconGoogle from "../../assets/icons/brandIcons/socials/devicon--google.svg?react";
import IconTwitter from "../../assets/icons/brandIcons/socials/devicon--twitter.svg?react";

const Profile: React.FC = () => {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center focus:outline-hidden">
        <div className="flex gap-x-4">
          <button>Login</button>
          <MyButton onClick={handleModalOpen}>Sign Up</MyButton>
        </div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <div className="flex w-full h-full bg-white overflow-hidden">
              <div className="w-[60%] flex flex-col items-center justify-center gap-4 p-6">
                <div className="">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <span>Sign Up</span>
                    <label
                      htmlFor="Username"
                      className="relative block rounded-md border border-gray-200 shadow-xs focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <input
                        type="text"
                        id="Username"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden"
                        placeholder="Username"
                      />
                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Username
                      </span>
                    </label>
                    <label
                      htmlFor="Password"
                      className="relative block rounded-md border border-gray-200 shadow-xs focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <input
                        type="text"
                        id="Password"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden"
                        placeholder="Password"
                      />
                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Password
                      </span>
                    </label>
                    <MyButton>Sign Up</MyButton>
                    <div className="flex items-center w-full my-4">
                      <div className="flex-1 border-t border-gray-300"></div>
                      <span className="px-4 text-gray-600 text-sm">or</span>
                      <div className="flex-1 border-t border-gray-300"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full space-x-4 mt-4">
                    <a className="w-16 h-16 bg-linen rounded-full flex items-center justify-center cursor-pointer">
                      <IconApple className="w-8 h-8" />
                    </a>
                    <a className="w-16 h-16 bg-linen rounded-full flex items-center justify-center cursor-pointer">
                      <IconFaceBook className="w-8 h-8" />
                    </a>
                    <a className="w-16 h-16 bg-linen rounded-full flex items-center justify-center cursor-pointer">
                      <IconGoogle className="w-8 h-8" />
                    </a>
                    <a className="w-16 h-16 bg-linen rounded-full flex items-center justify-center cursor-pointer">
                      <IconTwitter className="w-8 h-8" />
                    </a>
                  </div>
                  <div className="space-y-4 mt-4">
                    <label
                      htmlFor="Option1"
                      className="flex cursor-pointer items-start gap-4"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded-sm border-gray-300"
                          id="Option1"
                        />
                      </div>

                      <div>
                        <strong className="font-medium text-gray-900">
                          {" "}
                          I agree to receive the newsletter{" "}
                        </strong>
                      </div>
                    </label>
                    <p>
                      By using this site, you automatically create or use an
                      existing account on HealMe, agree to the processing of
                      personal data and accept the terms{" "}
                      <span className="underline font-semibold">
                        HealMe User Agreement{" "}
                        <a className="cursor-pointer">Show more</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[40%] bg-linen rounded-r-xl"></div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Profile;
