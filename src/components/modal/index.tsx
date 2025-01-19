import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Portal, { createContainer } from "../portal";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  title: string;
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
  const { title, onClose, children } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div
        ref={rootRef}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          >
            ✖
          </button>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
          <div className="text-gray-600">{children}</div>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
