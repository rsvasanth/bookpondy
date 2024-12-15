
import { Search, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <a  href="/" className="text-2xl font-bold text-amber-450">
          BookPondy
        </a >
        <div className="hidden md:flex items-center space-x-4">
          <a  href="/stays" className="text-black hover:text-amber-450">Stays</a >
          <a  href="/cars" className="text-black hover:text-amber-450">Cars</a >
          <a  href="/bikes" className="text-black hover:text-amber-450">Bikes</a >
          <a  href="/tours" className="text-black hover:text-amber-450">Tours</a >
          <a  href="/events" className="text-black hover:text-amber-450">Events</a >
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Search className="w-5 h-5 text-black" />
          </button>
          <button className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Menu className="w-5 h-5 text-black" />
          </button>
          <button className="hidden md:block px-4 py-2 rounded-full bg-amber-450 text-black hover:bg-amber-500">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

