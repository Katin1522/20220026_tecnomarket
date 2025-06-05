import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/apiUrls"; 

const useFetchProduct = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts();
      setDataProduct(response);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { dataProduct, loading, error, getProducts };
};

export default useFetchProduct;
