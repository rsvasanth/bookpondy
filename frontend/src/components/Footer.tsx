

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">About BookPondy</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-600 hover:text-amber-450">About Us</a ></li>
            <li><a href="/careers" className="text-gray-600 hover:text-amber-450">Careers</a ></li>
            <li><a href="/press" className="text-gray-600 hover:text-amber-450">Press</a ></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Accommodations</h3>
          <ul className="space-y-2">
            <li><a href="/stays" className="text-gray-600 hover:text-amber-450">Stays</a ></li>
            <li><a href="/hotels" className="text-gray-600 hover:text-amber-450">Hotels</a ></li>
            <li><a href="/villas" className="text-gray-600 hover:text-amber-450">Villas</a ></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Transportation</h3>
          <ul className="space-y-2">
            <li><a href="/cars" className="text-gray-600 hover:text-amber-450">Cars</a ></li>
            <li><a href="/bikes" className="text-gray-600 hover:text-amber-450">Bikes</a ></li>
            <li><a href="/scooters" className="text-gray-600 hover:text-amber-450">Scooters</a ></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Experiences</h3>
          <ul className="space-y-2">
            <li><a href="/tours" className="text-gray-600 hover:text-amber-450">Tours</a ></li>
            <li><a href="/events" className="text-gray-600 hover:text-amber-450">Events</a ></li>
            <li><a href="/activities" className="text-gray-600 hover:text-amber-450">Activities</a ></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Support</h3>
          <ul className="space-y-2">
            <li><a href="/help" className="text-gray-600 hover:text-amber-450">Help Center</a ></li>
            <li><a href="/safety" className="text-gray-600 hover:text-amber-450">Safety Information</a ></li>
            <li><a href="/cancellation" className="text-gray-600 hover:text-amber-450">Cancellation Options</a ></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>&copy; 2023 BookPondy. All rights reserved.</p>
      </div>
    </footer>
  )
}

