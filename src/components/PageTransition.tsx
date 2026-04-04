"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    // On route change, fade out → swap content → fade in
    setVisible(false);
    const timeout = setTimeout(() => {
      setDisplayedChildren(children);
      setVisible(true);
    }, 250);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease-in-out",
      }}
    >
      {displayedChildren}
    </div>
  );
}
