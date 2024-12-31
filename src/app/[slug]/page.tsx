
'use client'; 
import Link from 'next/link';
import { useParams } from 'next/navigation'; 

const FlavorDetail = () => {
  const { slug } = useParams(); 

  const flavors = [
    { slug: 'vanilla', name: 'Vanilla', description: 'Classic vanilla flavor.', image: '/images/vanilla.jpg', price: '$5' },
    { slug: 'chocolate', name: 'Chocolate', description: 'Rich chocolate flavor.', image: '/images/chocolate.jpg', price: '$6' },
    { slug: 'strawberry', name: 'Strawberry', description: 'Fresh strawberry flavor.', image: '/images/strawberry.jpg', price: '$5.5' },
    { slug: 'mango', name: 'Mango', description: 'Refreshing mango flavor.', image: '/images/mango.jpg', price: '$5' },
    { slug: 'pista', name: 'Pista', description: 'Delicious pista flavor.', image: '/images/pista.jpg', price: '$6' },
    { slug: 'lemon', name: 'Lemon', description: 'Tangy lemon flavor.', image: '/images/lemon.jpg', price: '$4.5' },
  ];

  const flavor = flavors.find(f => f.slug === slug);

  if (!flavor) {
    return <div>Flavor not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold">{flavor.name}</h1>
      <img
        src={flavor.image}
        alt={flavor.name}
        className="w-full h-64 object-cover rounded-md mt-4"
      />
      <p className="mt-4 text-lg">{flavor.description}</p>
      <p className="mt-4 text-xl font-semibold">Price: {flavor.price}</p>

      <div className="mt-6">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">Order Now</button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Comments</h3>
        <textarea
          placeholder="Leave a comment"
          className="w-full h-32 p-4 border border-gray-300 rounded-md mt-2"
        ></textarea>
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">Submit</button>
      </div>
        <div className="mt-6">
        <Link href="/categories" className="text-blue-600 hover:text-blue-800">
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default FlavorDetail;
