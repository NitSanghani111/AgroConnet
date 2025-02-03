import { useState } from "react";
import { Plus } from "lucide-react"; // Using lucide-react icon

type Product = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  status: string;
  createdAt: string;
  image: string;
};

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Organic Tomatoes",
    category: "Vegetables",
    quantity: 100,
    price: 2.99,
    status: "available",
    createdAt: "2024-01-30",
    image: "/placeholder.svg",
  },
  // Add more mock products...
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState<File | null>(null);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        id: (products.length + 1).toString(),
        name: productName,
        category,
        quantity,
        price,
        status: "available",
        createdAt: new Date().toISOString(),
        image: image ? URL.createObjectURL(image) : "/placeholder.svg",
      },
    ]);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {/* Animated Plus Icon */}
          <Plus
            className="mr-2 group-hover:animate-bounce"
            size={18}
          />
          Add Product
        </button>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="grains">Grains</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Product Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Add Product
                </button>
              </div>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Product Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="card bg-white p-4 shadow-lg rounded-lg">
          <h5 className="text-xl font-semibold">Total Products</h5>
          <p className="text-2xl">{products.length}</p>
        </div>
        <div className="card bg-white p-4 shadow-lg rounded-lg">
          <h5 className="text-xl font-semibold">Available Products</h5>
          <p className="text-2xl">
            {products.filter((p) => p.status === "available").length}
          </p>
        </div>
        <div className="card bg-white p-4 shadow-lg rounded-lg">
          <h5 className="text-xl font-semibold">Sold Products</h5>
          <p className="text-2xl">
            {products.filter((p) => p.status === "sold").length}
          </p>
        </div>
      </div>

      {/* Product Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Product Inventory</h2>
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-2 border-b text-left text-gray-700">Product</th>
              <th className="px-6 py-2 border-b text-left text-gray-700">Category</th>
              <th className="px-6 py-2 border-b text-left text-gray-700">Quantity</th>
              <th className="px-6 py-2 border-b text-left text-gray-700">Price</th>
              <th className="px-6 py-2 border-b text-left text-gray-700">Status</th>
              <th className="px-6 py-2 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-3">{product.name}</td>
                <td className="px-6 py-3">{product.category}</td>
                <td className="px-6 py-3">{product.quantity}</td>
                <td className="px-6 py-3">${product.price.toFixed(2)}</td>
                <td className="px-6 py-3">{product.status}</td>
                <td className="px-6 py-3">
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
