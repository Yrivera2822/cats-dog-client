import { useState, createContext,useEffect, Children } from "react";
import axios from "axios";

const AnimalsContext= createContext();

function AnimalsProvider() {
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);

  return(
    <AnimalsContext.Provider value={{cats, dogs}}>
        {Children}
    </AnimalsContext.Provider>
  );
}


export default {AnimalsContext,AnimalsProvider};
