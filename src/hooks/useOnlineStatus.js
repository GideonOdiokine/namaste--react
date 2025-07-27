import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [Isonline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);

  return {
    Isonline,
  };
};
