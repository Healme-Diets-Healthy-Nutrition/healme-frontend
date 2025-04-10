import React, { useState } from "react";
import Modal from "@/components/modComponents/modal";
import InputComp from "@/components/ui/InputComp";
import IconApple from "@/assets/icons/brandIcons/socials/devicon--apple.svg?react";
import IconFaceBook from "@/assets/icons/brandIcons/socials/devicon--facebook.svg?react";
import IconGoogle from "@/assets/icons/brandIcons/socials/devicon--google.svg?react";
import IconTwitter from "@/assets/icons/brandIcons/socials/devicon--twitter.svg?react";
import MainButton from "../buttons/MainButton";

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
          <MainButton title="login" variant="outline"/>
          <MainButton title="Sign Up" variant="default" onClick={handleModalOpen}/>
        </div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <div className="flex w-full h-full bg-white overflow-hidden">
              <div className="w-[60%] flex flex-col items-center justify-center gap-4 p-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <span>Sign Up</span>
                  <InputComp id="username" type="text" label="Username" />
                  <InputComp id="password" type="password" label="Password" />
                  <MainButton variant="default" title="Sign Up"/>
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
              <div className="w-[40%] bg-linen rounded-r-xl"></div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Profile;
