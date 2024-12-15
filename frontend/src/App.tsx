import { useState } from 'react'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { Button } from "@/components/ui/button"
function App() {
  const [count, setCount] = useState(0)

  function handelClick(){
	setCount(count+1)
	console.log(count)
  }

  return (
	<div className="App">
	  <FrappeProvider
	  siteName={import.meta.env.VITE_SITE_NAME}
	  socketPort={import.meta.env.VITE_SOCKET_PORT}
	  >
		<Button className={"bg-amber-400"} onClick={handelClick}>hello : {count}</Button>
	 
	  </FrappeProvider>
	</div>
  )
}

export default App
