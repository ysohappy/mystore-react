import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-contain bg-white p-4"
      />

      <div className="p-5">
        <h2 className="font-bold line-clamp-2 h-14">
          {product.title}
        </h2>

        <p className="capitalize text-gray-500 mt-2">
          {product.category}
        </p>

        <p className="text-2xl font-bold text-blue-600 mt-3">
          ${product.price}
        </p>

        <p className="mt-2">
          ⭐ {product.rating.rate}
        </p>
<div className="flex gap-3 mt-5">
  <Link
    to={`/products/${product.id}`}
    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
  >
    View
  </Link>

  <button
  onClick={() => {
    console.log("Button clicked!");
    console.log(product);
    addToCart(product);
  }}
  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
>
  Add
</button>
</div>
      </div>
    </div>  );
}