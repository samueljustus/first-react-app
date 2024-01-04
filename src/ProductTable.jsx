import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

export default function ProductTable({ products, isInStock, filterText }) {
  const row = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return;
    }
    if (isInStock && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      row.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    row.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
}
