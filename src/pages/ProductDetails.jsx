import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (!product) {
    return (
      <h2 className="text-center text-red-600 text-2xl">
        Product not found.
      </h2>
    );
  }

  return (
    <section className="grid md:grid-cols-2 gap-12">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain bg-white rounded-xl shadow p-8"
      />

      <div>
        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-gray-500 capitalize mt-4">
          {product.category}
        </p>

        <p className="text-yellow-500 mt-4">
          ⭐ {product.rating.rate}
        </p>

        <p className="text-4xl text-blue-600 font-bold mt-4">
          ${product.price}
        </p>

        <p className="text-gray-600 mt-6">
          {product.description}
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            Add to Cart
          </button>

          <Link
            to="/products"
            className="bg-gray-200 px-8 py-3 rounded-lg hover:bg-gray-300"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
}