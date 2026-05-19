"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] hidden md:block" aria-hidden="true">
      <div
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA3FF]/16 blur-[110px]"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="absolute h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A96B]/12 blur-[85px]"
        style={{ left: position.x + 30, top: position.y - 25 }}
      />
    </div>
  );
}
