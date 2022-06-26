import { useState } from "react";

function useLocalStorage(key, value) {
  const [valueLS, setValueLS] = useState(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    }
  });

  const setStoredValue = (value) => {
    if (typeof window !== "undefined") {
      const stringifiedValue = JSON.stringify(value);
      window.localStorage.setItem(key, stringifiedValue);
      setValueLS(value);
    }
  };

  return [valueLS, setStoredValue];
}

export default useLocalStorage;
