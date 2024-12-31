
'use client'; 
import { useParams } from 'next/navigation';  
const Pista = () => {
  const params = useParams();  
  const flavorSlug = params.slug;  
  
  const flavor = { 
    name: 'Pista', 
    description: 'Our Pista flavor is made from the finest pistachios, offering a rich and nutty taste. The creaminess of the ice cream combined with the crunch of pistachios makes it a true indulgence. Perfect for anyone who loves nuts or creamy ice creams, this flavor is a perfect blend of sweet and savory.',
    ingredients: [
      'Pistachios',
      'Whole milk',
      'Sugar',
      'Heavy cream',
      'Vanilla extract',
      'Salt'
    ],
    image: '/pistaaa.jpg', 
    price: '$6',
    nutritionalInfo: [
      'Calories: 240',
      'Fat: 15g',
      'Carbs: 20g',
      'Protein: 5g'
    ]
  };

  return (
    <div className="bg-green-100 p-6 max-w-4xl mx-auto space-y-8">
      {/* Flavor Name */}
      <h1 className="text-4xl font-bold text-center">{flavor.name}</h1>

      {/* Flavor Image */}
      <img
        src={flavor.image}
        alt={flavor.name}
        className="w-full h-64 object-cover rounded-lg shadow-lg mt-4"
      />

      {/* Flavor Description */}
      <p className="mt-4 text-lg text-gray-700">{flavor.description}</p>

      {/* Ingredients List */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Ingredients</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          {flavor.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Nutritional Info */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Nutritional Information</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          {flavor.nutritionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <p className="mt-4 text-2xl font-semibold text-blue-600">Price: {flavor.price}</p>

      {/* Order Button */}
      <div className="mt-6 text-center">
        <button className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-400 transition duration-300">
          Order Now
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Comments</h3>
        <textarea
          placeholder="Leave a comment"
          className="w-full h-32 p-4 border border-gray-300 rounded-md mt-2"
        ></textarea>
        <button className="mt-4 bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-400 transition duration-300">Submit</button>
      </div>
    </div>
  );
};

export default Pista;
