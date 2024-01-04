export default function SearchBar({
  filterText,
  isInStock,
  filterTextChange,
  isInStockChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="search..."
        onChange={(e) => {
          filterTextChange(e.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={isInStock}
          onChange={(e) => {
            isInStockChange(e.target.checked);
          }}
        />
        Only show product in stock
      </label>
    </form>
  );
}
