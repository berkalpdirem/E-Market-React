import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    //--------------------------GetTopProducts--------------------------
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setTopProducts(response.data.products);
      } catch (error) {
        console.log("Ürünleri getirirken bir hata oluştu!", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <ApiContext.Provider value={{ topProducts }}>
      {children}
    </ApiContext.Provider>
  );
};
