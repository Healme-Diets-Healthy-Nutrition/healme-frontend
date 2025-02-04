import React, { useState } from 'react';
import Modal from "../modal/index.tsx";
import MyButton from "../buttons/MyButton.tsx";
import TextField from '@mui/material/TextField';

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
        <MyButton onClick={handleModalOpen}>
          Sign Up
        </MyButton>
      </div>

      {isModalActive && (
        <Modal title="Sign Up" onClose={handleModalClose} >
        <TextField id="outlined-basic" label="Login" variant="outlined" className="flex align-center justify-center"/>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <MyButton>Sign Up</MyButton>
        <div className="w-[40%] bg-linen rounded-r-xl"></div>

        </Modal>
      )}
    </div>
    </>
  );
};

export default Profile;
