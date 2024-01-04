import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";
import { useState } from "react";

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [isInStock, setIsInStock] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        isInStock={isInStock}
        filterTextChange={setFilterText}
        isInStockChange={setIsInStock}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isInStock={isInStock}
        isInStockChange={setIsInStock}
      />
    </div>
  );
}
