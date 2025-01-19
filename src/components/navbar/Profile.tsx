import React, { useState } from 'react';
import Modal from "../modal/index.tsx";
import Button from "../buttons/MyButton.tsx"

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
 <div className="flex flex-col items-center justify-center">
      <div className="flex gap-x-4">
        <button>Login</button>
        <Button onClick={handleModalOpen}>
          Sign Up
        </Button>
      </div>

      {isModalActive && (
        <Modal title="Modal Title" onClose={handleModalClose}>
          <p>This is the modal content!</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={handleModalClose}
          >
            Close Modal
          </button>
        </Modal>
      )}
    </div>
    </>
  );
};

export default Profile;
