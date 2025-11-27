"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { EasterEggOverlay } from "./word-easter-egg-overlay";
import { useCallback, useState } from "react";
import { useEasterEgg } from "@/hooks/useWordEasterEgg";

export function ThemeProvider({
  children,
  easterEggObj,
  ...props
}: React.ComponentProps<typeof NextThemesProvider> & {
  easterEggObj: {
    secretWord: string;
    message: string;
    subMessage: string;
  };
}) {
  const [open, setOpen] = useState(false);

  const trigger = useCallback(() => setOpen(true), []);

  useEasterEgg(easterEggObj.secretWord, trigger);
  return (
    <NextThemesProvider {...props}>
      {children}
      {easterEggObj.secretWord &&
        easterEggObj.message &&
        easterEggObj.subMessage && (
          <EasterEggOverlay
            isOpen={open}
            onClose={() => setOpen(false)}
            message={easterEggObj.message}
            subMessage={easterEggObj.subMessage}
          />
        )}
    </NextThemesProvider>
  );
}
