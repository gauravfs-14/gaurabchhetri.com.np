import { useEffect } from "react";

export function useEasterEgg(secretWord: string, onTrigger: () => void) {
  const normalized = secretWord.toLowerCase();

  useEffect(() => {
    let progress = 0;
    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key?.toLowerCase();
      if (!key || key.length !== 1) return;

      if (key === normalized[progress]) {
        progress += 1;
        if (progress === normalized.length) {
          onTrigger();
          progress = 0;
        }
      } else if (key === normalized[0]) {
        progress = 1;
      } else {
        progress = 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [normalized, onTrigger]);
}
