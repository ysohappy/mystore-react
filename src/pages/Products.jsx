import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { products, loading, error } = useProducts();
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
  const filtered = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      break;

    case "name":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;

    default:
      break;
  }

  return filtered;
}, [products, search, category, sortBy]);

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <p className="text-center text-red-600 text-xl">
        {error}
      </p>
    );

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <SearchBar
  search={search}
  setSearch={setSearch}
/>

<div className="mb-6 flex items-center gap-3">
  <label className="font-semibold">
    Sort By
  </label>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border rounded-lg px-4 py-2"
  >
    <option value="default">Default</option>
    <option value="price-low">Price: Low → High</option>
    <option value="price-high">Price: High → Low</option>
    <option value="rating">Highest Rated</option>
    <option value="name">Name (A–Z)</option>
  </select>
</div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}