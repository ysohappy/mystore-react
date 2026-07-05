export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h1 className="text-5xl font-bold mb-8">
        About MyStore
      </h1>

      <p className="text-lg text-gray-600 leading-8">
        MyStore is a modern e-commerce web application built using
        React, Vite, Tailwind CSS, React Router, Context API, Axios,
        and the Fake Store API.

        This project demonstrates a complete shopping experience,
        including product browsing, searching, filtering, sorting,
        product details, and a fully functional shopping cart.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold">
            React
          </h2>

          <p className="mt-3 text-gray-600">
            Component-based architecture with reusable UI.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold">
            Tailwind CSS
          </h2>

          <p className="mt-3 text-gray-600">
            Responsive modern styling.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold">
            Fake Store API
          </h2>

          <p className="mt-3 text-gray-600">
            Live product data for a realistic shopping experience.
          </p>
        </div>
      </div>
    </section>
  );
}