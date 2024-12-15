
import { FrappeProvider } from 'frappe-react-sdk'


import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedListings from './components/FeaturedListings'
import TourPackages from './components/TourPackages'
import Footer from './components/Footer'

function App() {




  return (
	<div className="App">
	  <FrappeProvider
	  siteName={import.meta.env.VITE_SITE_NAME}
	  socketPort={import.meta.env.VITE_SOCKET_PORT}
	  >
	    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-yellow-400">
        <Hero />
		<TourPackages />
        <FeaturedListings />
        <TourPackages />
      </main>
      <Footer />
    </div>
	  </FrappeProvider>
	</div>
  )
}

export default App
