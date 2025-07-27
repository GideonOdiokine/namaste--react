import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [isonline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);

  return {
    isonline,
  };
};
