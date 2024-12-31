
'use client';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Categories = () => {
  const router = useRouter();

  const flavors = [
    { slug: 'vanila', name: 'Vanilla', description: 'Classic vanilla flavor.', image: '/vanila-2.jpg' },
    { slug: 'chocolate', name: 'Chocolate', description: 'Rich chocolate flavor.', image: '/choclate.jpg' },
    { slug: 'strawbery', name: 'Strawberry', description: 'Fresh strawberry flavor.', image: '/sta.jpeg' },
    { slug: 'mango', name: 'Mango', description: 'Refreshing mango flavor.', image: '/mango.jpg' },
    { slug: 'pista', name: 'Pista', description: 'Delicious pista flavor.', image: '/pista1.jpg' },
    { slug: 'lemon', name: 'Lemon', description: 'Tangy lemon flavor.', image: '/lemon1.jpg' }
  ];

  return (
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 bg-gradient-to-r from-pink-200 to-teal-500 text-white shadow-lg border rounded">
        {flavors.map((flavor) => (
          <div key={flavor.slug} className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src={flavor.image}
              alt={flavor.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-4 text-2xl font-semibold">{flavor.name}</h2>
            <p className="text-gray-500 text-sm mt-2">{flavor.description}</p>

            {/* View Details Button */}
            <button
              onClick={() => router.push(`/flavors/${flavor.slug}`)}
              className="mt-4 bg-yellow-700 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              VIEW DETAILS
            </button>
          </div>
           
        ))}
      </div>

  );
};

export default Categories;
