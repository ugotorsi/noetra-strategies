"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(77,163,255,0.24),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(198,169,107,0.2),transparent_45%),#0B0F14]"
        >
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.45em] text-[#F5F7FA]/82 sm:text-sm"
          >
            NOETRA STRATEGIES
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
