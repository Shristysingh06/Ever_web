// components/Products.js
export default function Products() {
  const products = [
    { id: 1, name: 'Jumpsuit', price: 50, image: '/jumpsuit.jpg' },
    { id: 2, name: 'Dress', price: 60, image: '/dress.jpg' },
    // Add more products here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <image src={product.image} alt={product.name} width={200} height={300} />
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
