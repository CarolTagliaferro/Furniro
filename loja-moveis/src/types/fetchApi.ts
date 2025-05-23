import { useState, useEffect } from "react";
import { Product } from "../store/product";

const useFetchApi = (url: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
};

export default useFetchApi;
