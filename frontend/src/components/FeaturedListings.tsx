
import { Star, Car, Bike, MapPin, Calendar } from 'lucide-react'

const listings = [
  { 
    id: 1, 
    type: 'stay', 
    title: 'Beachfront Villa', 
    location: 'Pondicherry Beach', 
    price: '₹5,000', 
    rating: 4.9, 
    image: 'https://picsum.photos/800/400?random=1&height=200&width=300&text=Beachfront+Villa' 
  },
  { 
    id: 2, 
    type: 'car', 
    title: 'Luxury Sedan', 
    location: 'Pondicherry City', 
    price: '₹2,000', 
    rating: 4.7, 
    image: 'https://picsum.photos/800/400?random=2&height=200&width=300&text=Luxury+Sedan' 
  },
  { 
    id: 3, 
    type: 'bike', 
    title: 'Mountain Bike', 
    location: 'Auroville', 
    price: '₹500', 
    rating: 4.8, 
    image: 'https://picsum.photos/800/400?random=3&height=200&width=300&text=Mountain+Bike' 
  },
  { 
    id: 4, 
    type: 'tour', 
    title: 'French Colony Walk', 
    location: 'French Quarter', 
    price: '₹1,500', 
    rating: 4.9, 
    image: 'https://picsum.photos/800/400?random=4&height=200&width=300&text=French+Colony+Walk' 
  },
  { 
    id: 5, 
    type: 'event', 
    title: 'Pondicherry Music Festival', 
    location: 'Promenade Beach', 
    price: '₹1,000', 
    rating: 4.6, 
    image: 'https://picsum.photos/800/400?random=5&height=200&width=300&text=Music+Festival' 
  },
  { 
    id: 6, 
    type: 'car', 
    title: 'Electric Scooter', 
    location: 'Pondicherry City', 
    price: '₹800', 
    rating: 4.5, 
    image: 'https://picsum.photos/800/400?random=6&height=200&width=300&text=Electric+Scooter' 
  },
]


const getIcon = (type: string) => {
  switch (type) {
    case 'car':
      return <Car className="w-4 h-4 text-amber-450" />
    case 'bike':
      return <Bike className="w-4 h-4 text-amber-450" />
    case 'tour':
      return <MapPin className="w-4 h-4 text-amber-450" />
    case 'event':
      return <Calendar className="w-4 h-4 text-amber-450" />
    default:
      return <Star className="w-4 h-4 text-amber-450" />
  }
}

export default function FeaturedListings() {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={listing.image} alt={listing.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-amber-450 flex items-center">
                    {getIcon(listing.type)}
                    <span className="ml-1">{listing.type.toUpperCase()}</span>
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-450 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{listing.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{listing.title}</h3>
                <p className="text-gray-600 mb-2">{listing.location}</p>
                <p className="text-lg font-bold text-black">{listing.price} <span className="text-sm font-normal text-gray-600">/ {listing.type === 'event' ? 'ticket' : 'day'}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

