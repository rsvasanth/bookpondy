import { Clock, MapPin } from 'lucide-react'

const tourPackages = [
  {
    id: 1,
    title: 'Pondicherry Heritage Walk',
    duration: '3 hours',
    location: 'French Quarter, Pondicherry',
    price: '₹1,500',
    image: 'https://picsum.photos/800/400?random=7&height=200&width=300&text=Heritage+Walk'
  },
  {
    id: 2,
    title: 'Auroville Spiritual Tour',
    duration: '5 hours',
    location: 'Auroville, Pondicherry',
    price: '₹2,500',
    image: 'https://picsum.photos/800/400?random=8&height=200&width=300&text=Auroville+Tour'
  },
  {
    id: 3,
    title: 'Pondicherry Food Trail',
    duration: '4 hours',
    location: 'Various locations, Pondicherry',
    price: '₹2,000',
    image: 'https://picsum.photos/800/400?random=9&height=200&width=300&text=Food+Trail'
  }
]

export default function TourPackages() {
  return (
    <section className="py-16 px-6 md:px-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Popular Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={tour.image} 
                alt={tour.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">{tour.title}</h3>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-amber-450 mr-2" />
                  <span className="text-sm text-gray-600">{tour.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-amber-450 mr-2" />
                  <span className="text-sm text-gray-600">{tour.location}</span>
                </div>
                <p className="text-lg font-bold text-black">
                  {tour.price} <span className="text-sm font-normal text-gray-600">/ person</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
