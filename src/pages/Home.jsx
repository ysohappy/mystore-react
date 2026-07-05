import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-12 md:p-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Shop electronics, jewelry, men's clothing and women's fashion from
            one modern online store.
          </p>

          <Link
            to="/products"
            className="inline-block mt-10 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Electronics",
            "Jewelry",
            "Men's Clothing",
            "Women's Clothing",
          ].map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Shop With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="text-5xl">🚚</div>
            <h3 className="text-xl font-bold mt-4">Fast Shipping</h3>
            <p className="mt-3 text-gray-600">
              Quick and reliable delivery on every order.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="text-5xl">💳</div>
            <h3 className="text-xl font-bold mt-4">Secure Payments</h3>
            <p className="mt-3 text-gray-600">
              Safe online payments with trusted providers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="text-5xl">⭐</div>
            <h3 className="text-xl font-bold mt-4">Quality Products</h3>
            <p className="mt-3 text-gray-600">
              Carefully selected products from trusted brands.
            </p>
          </div>
        </div>
      </section>
      <FeaturedProducts />

      {/* Newsletter */}
      <section className="bg-blue-600 rounded-3xl text-white p-12 text-center">
        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-4 text-blue-100">
          Subscribe for new arrivals and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg text-black w-full md:w-96"
          />

          <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}