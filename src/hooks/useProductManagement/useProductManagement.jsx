import { useState, useEffect } from "react";
import useGetProduct from "../useGetProduct/useGetProduct";

const useProductManagement = (recordsPerPage) => {
  const { products: fetchedProducts, loading } = useGetProduct();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentProducts = fetchedProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(firstIndex, lastIndex);

  useEffect(() => {
    setTotalPages(Math.ceil(fetchedProducts.length / recordsPerPage));
  }, [fetchedProducts]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return {
    loading,
    currentProducts,
    totalPages,
    currentPage,
    handleSearch,
    handlePageChange,
  };
};

export default useProductManagement;
