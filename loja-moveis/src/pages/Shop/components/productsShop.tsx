import { useState } from "react";
import useFetchApi from "../../../types/fetchApi";
import ProductCard from "../../../components/productCard";

const ProductsShop = () => {
  const { products, loading, error } = useFetchApi(
    "http://localhost:3001/products"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const visiblePageButtons = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const renderPageButtons = () => {
    const pageButtons = [];

    let start = Math.max(1, currentPage - Math.floor(visiblePageButtons / 2));
    const end = Math.min(start + visiblePageButtons - 1, totalPages);

    start = Math.max(1, end - visiblePageButtons + 1);

    if (start > 1) {
      pageButtons.push(
        <button
          key="dots-left"
          className="bg-mediumBg hover:bg-primary hover:text-white text-black py-2 px-4 rounded"
          onClick={() => goToPage(start - 1)}
        >
          ...
        </button>
      );
    }

    for (let i = start; i <= end; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`bg-mediumBg hover:bg-primary hover:text-white text-black py-2 px-4 rounded ${
            currentPage === i ? "bg-primary text-white" : ""
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    if (end <= totalPages) {
      pageButtons.push(
        <button
          key="next"
          className="bg-mediumBg hover:bg-primary hover:text-white text-black py-2 px-4 rounded"
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="my-10 lg:my-20 lg:mx-36">
      <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4 lg:gap-8 lg:px-0 place-items-center">
        {products
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {renderPageButtons()}
      </div>
    </div>
  );
};

export default ProductsShop;
