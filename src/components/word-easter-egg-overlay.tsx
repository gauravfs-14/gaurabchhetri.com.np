import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "./ui/button";

export function EasterEggOverlay({
  isOpen,
  onClose,
  message = "You found the easter egg!",
  subMessage = "Thanks for exploring my portfolio this far.",
}: {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  subMessage: string;
}) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
      });
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-background/70 backdrop-blur-xl
      "
      onClick={onClose}
    >
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        recycle={true}
        numberOfPieces={300}
      />

      <div
        className="
          relative w-[90%] max-w-lg
          rounded-2xl p-8
          bg-background text-foreground
          shadow-2xl border border-slate-700/50
          backdrop-blur-2xl
          text-center
          animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold tracking-wide mb-3">{message}</h2>

        <p className="text-slate-300 text-sm mb-6">{subMessage}</p>

        <Button
          className="
            mt-2 px-6 py-2 text-sm font-medium cursor-pointer
          "
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
