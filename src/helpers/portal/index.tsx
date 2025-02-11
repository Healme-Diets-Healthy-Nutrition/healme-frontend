import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PORTAL_ERROR_MSG } from "../../utils/portalUtils";

type PortalProps = {
  id: string;
  children: React.ReactNode;
};

const Portal = ({ id, children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!id) return;

    const portalContainer = document.getElementById(id);

    if (!portalContainer) {
      console.error(PORTAL_ERROR_MSG);
      return;
    }

    setContainer(portalContainer);
  }, [id]);

  return container ? createPortal(children, container) : null;
};

export default Portal;

