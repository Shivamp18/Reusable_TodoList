import { useState } from "react";


function useLocalStorage(key, initialValue) {

  const [name, setName] = useState(() => getKey());

  function setKey(value) {
    setName(value)
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error in saving to localStorage", error);
    }


  }

  function getKey() {
    try {
      const names = localStorage.getItem(key);
      return names ? JSON.parse(names) : initialValue;
    } catch (error) {
      console.error("Error in reading from localStorage", error);
      return initialValue;
    }


  }

  return [name, setKey]

}

export default useLocalStorage;