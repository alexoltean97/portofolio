import ProductCard from "../ProductCard/ProductCard";
import PaginationRow from "../PaginatioRow/PaginationRow";
import Search from "../Search/Search";
import useProductManagement from "../../../hooks/useProductManagement/useProductManagement";

const ProductRow = () => {
  const {
    loading,
    currentProducts,
    totalPages,
    currentPage,
    handleSearch,
    handlePageChange,
  } = useProductManagement(3);
  return (
    <div className="products">
      <div className="search-for mt-4"> 
        <h2>Search for product</h2>
        <Search onSearch={handleSearch} />

        <div className="row">
          {loading && <p>Loading...</p>}

          {!loading &&
            currentProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                name={product.name}
                description={product.description}
                imagePath={product.path}
                price={product.price}
                link={product.id}
              />
            ))}
        </div>

        <PaginationRow
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductRow;
