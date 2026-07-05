import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import LoadingSpinner from "./LoadingSpinner";

export default function FeaturedProducts() {
  const { products, loading } = useProducts();

  if (loading) return <LoadingSpinner />;

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-5"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain"
            />

            <h3 className="font-bold mt-4 line-clamp-2">
              {product.title}
            </h3>

            <p className="text-blue-600 font-bold mt-3">
              ${product.price}
            </p>

            <Link
              to={`/products/${product.id}`}
              className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}