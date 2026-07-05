import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Your Cart is Empty 🛒</h1>
        <p className="text-gray-500 mt-3">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-xl p-5"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <div>
                <h2 className="font-bold">{item.title}</h2>

                <p className="text-blue-600 font-semibold mt-2">
                  ${item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5 md:mt-0">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                −
              </button>

              <span className="font-bold">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <button className="mt-5 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
          Checkout
        </button>
      </div>
    </section>
  );
}