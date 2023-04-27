import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  cateroriesMap: {},
});

export const CategoriesProvider = ({ children }) => {

  const [cateroriesMap, setCateroriesMap] = useState({});

    useEffect(()=>{
        const getcategoriesmap = async ()=>{
          const categorymap = await getCategoriesAndDocuments()  
          setCateroriesMap(categorymap)  
        }    
        
        getcategoriesmap() 
      
    },[])

  const value = { cateroriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
