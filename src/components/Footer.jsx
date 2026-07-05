export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-2xl font-bold">
            MyStore
          </h2>

          <p className="mt-4">
            Your one-stop shop for quality products.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">
            Contact
          </h3>

          <p>Email: support@mystore.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center">
        © 2026 MyStore. All Rights Reserved.
      </div>
    </footer>
  );
}