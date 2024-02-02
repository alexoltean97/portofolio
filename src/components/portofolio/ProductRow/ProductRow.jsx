import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
// import useProductManagement from '../../../../hooks/useProductManagement/useProductManagement';
import useProductManagement from "../../../hooks/useProductManagement/useProductManagement";

const ProductRow = () => {
  const {
    loading,
    currentProducts,
    totalPages,
    currentPage,
    handleSearch,
    handlePageChange,
  } = useProductManagement(6);

  return (
    <div className="products">
      <div className="container mt-4">
        <Search onSearch={handleSearch} />

        <div className="row">
          {loading && <p>Loading...</p>}

          {!loading &&
            currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                link={product.id}
              />
            ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductRow;
