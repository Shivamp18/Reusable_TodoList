import { useState } from "react";


function useLocalStorage(key, initialValue){
   
const [name, setName] = useState(() => getKey());

    function setKey(value){
      setName(value)
       localStorage.setItem(key,JSON.stringify(value));

    }

    function getKey(){
        const names = localStorage.getItem(key);
        return names ? JSON.parse(names) : initialValue;
}

return [name, setKey]

}

export default useLocalStorage;