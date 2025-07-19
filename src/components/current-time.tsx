"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const getAustinTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Chicago",
      hour12: true,
      timeStyle: "short" as const,
    //   dateStyle: "short" as const,
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(new Date());
  };
  const [time, setTime] = useState(getAustinTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getAustinTime());
    }, 1000);
    return () => clearInterval(interval);
}, []);

  return (
    <>
      {time}
    </>
  );
}