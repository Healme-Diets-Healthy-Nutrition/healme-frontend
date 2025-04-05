import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import Portal from "@/helpers/portal";
import { createContainer } from "@/lib/portalUtils";
import IconClose from "@/assets/icons/ui/close.svg?react";
import Logo from "@/components/modComponents/navbar/Logo";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
  const {onClose, children } = props;
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

  const handleClose: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="w-256 max-w-[90vw] h-192 rounded-xl shadow-xl flex relative">
          <div className="absolute top-0 left-[60%] -translate-x-1/2 -mt-6 z-20">
            <Logo />
          </div>
          {children}
          <div onClick={handleClose} className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-900 transition duration-200">
            <IconClose className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
