import { Search } from 'lucide-react'
import HeroSlider from './HeroSlider'

export default function Hero() {
  return (
    <div className="bg-amber-450 text-black py-20 px-6 md:px-10">
      <div className="container mx-auto flex  bg-yellow-400  flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center  lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Stay, Ride, or Drive</h1>
          <p className="text-xl mb-8">Book accommodations, rent cars, or hire bikes - all in one place!</p>
          <div className="max-w-md mx-auto lg:mx-0 bg-white rounded-full overflow-hidden flex items-center p-2">
            <input
              type="text"
              placeholder="Where are you going?"
              className="flex-grow px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <HeroSlider />
        </div>
      </div>
    </div>
  )
}

