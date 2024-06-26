import ProductCard from "../ProductCard/ProductCard";
import PaginationRow from "../PaginatioRow/PaginationRow";
import Search from "../Search/Search";
import useProductManagement from "../../../hooks/useProductManagement/useProductManagement";
import { useTranslation } from "react-i18next";
import placeHoldImg from "../../../assets/images/single-product.png";

const ProductRow = () => {
  const { t } = useTranslation();

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
        <h2>{t("searchFor")}</h2>
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
                imagePath={placeHoldImg}
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
