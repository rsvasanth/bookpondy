import { Clock, MapPin } from 'lucide-react';
import { useFrappeGetDocList } from 'frappe-react-sdk';

export default function TourPackages() {
  // Fetching tour package data from the Frappe backend
  const { data, isLoading, error } = useFrappeGetDocList('Tour Package', {
    fields: [
      'package_name',
      'base_price_per_person',
      'duration',
      'destination',
      'images'
    ],
  });
console.log(data)
  // Loading and Error states
  if (isLoading) {
    return <div className="text-center py-16">Loading tour packages...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error fetching data: {error.message}</div>;
  }

  return (
    <section className="py-16 px-6 md:px-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Popular Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.map((tour, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src= {tour.images || 'https://picsum.photos/800/400?random=10'} 
                alt={tour.package_name} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  {tour.package_name}
                </h3>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-amber-450 mr-2" />
                  <span className="text-sm text-gray-600">{tour.duration || 'N/A'} hours</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-amber-450 mr-2" />
                  <span className="text-sm text-gray-600">{tour.destination || 'Location not specified'}</span>
                </div>
                <p className="text-lg font-bold text-black">
                  ₹{tour.base_price_per_person || '0'} <span className="text-sm font-normal text-gray-600">/ person</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
