import React, { useState } from "react";
import Modal from "@/components/modComponents/modal";
import MainInput from "@/components/ui/MainInput";
import IconApple from "@/assets/icons/brandIcons/socials/devicon--apple.svg?react";
import IconFaceBook from "@/assets/icons/brandIcons/socials/devicon--facebook.svg?react";
import IconGoogle from "@/assets/icons/brandIcons/socials/devicon--google.svg?react";
import IconTwitter from "@/assets/icons/brandIcons/socials/devicon--twitter.svg?react";
import MainButton from "../buttons/MainButton";
import MainCheckbox from "../MainCheckbox";

const Profile: React.FC = () => {
  const [isModalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState<"login" | "signup">("signup")

  const handleModalOpen = (type: "login" | "signup") => {
    setModalActive(true);
    setModalType(type);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center focus:outline-hidden">
        <div className="flex gap-x-4">
          <MainButton title="login" variant="outline" onClick={() => handleModalOpen("login")}/>
          <MainButton title="Sign Up" variant="default" onClick={() => handleModalOpen("signup")}/>
        </div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <div className="flex w-full h-full rounded-md bg-white overflow-hidden">
              <div className="w-[60%] flex flex-col items-center justify-center gap-4 p-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <span>{modalType === "signup" ? "Sign Up" : "Login"}</span>
                  <MainInput id="username" type="text" label="Username" />
                  <MainInput id="password" type="password" label="Password" />
                  <MainButton variant="default" title={modalType === "signup" ? "Sign Up" : "Login"}/>
                  {modalType === "login" && (<MainButton variant="link" title="Forgot password?"/>)}
                  <div className="flex items-center w-full my-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-gray-600 text-sm">or</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full space-x-4 mt-4">
                  <a className="w-16 h-16 bg-background border-2 border-primary-background hover:bg-gray-300 transition-colors duration-200 rounded-full flex items-center justify-center cursor-pointer">
                    <IconApple className="w-8 h-8" />
                  </a>
                  <a className="w-16 h-16 bg-background border-2 border-primary-background hover:bg-gray-300 transition-colors duration-200 rounded-full flex items-center justify-center cursor-pointer">
                    <IconFaceBook className="w-8 h-8" />
                  </a>
                  <a className="w-16 h-16 bg-background border-2 border-primary-background hover:bg-gray-300 transition-colors duration-200 rounded-full flex items-center justify-center cursor-pointer">
                    <IconGoogle className="w-8 h-8" />
                  </a>
                  <a className="w-16 h-16 bg-background border-2 border-primary-background hover:bg-gray-300 transition-colors duration-200 rounded-full flex items-center justify-center cursor-pointer">
                    <IconTwitter className="w-8 h-8" />
                  </a>
                </div>
                  {modalType === "login" && <span>No account?<MainButton title="Sign up" variant="link"/></span>}
                {modalType === "signup" && (<>
                  <div className="space-y-4 mt-4">
                    <label
                      htmlFor="Option1"
                      className="flex cursor-pointer items-start gap-4"
                    >
                      <MainCheckbox label="I agree to receive the newsletter" className="flex items-center"></MainCheckbox>
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
                </>)}
              </div>
              <div className="w-[45%] bg-secondary"></div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Profile;
