import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Join from "./Components/Join"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import ProductionCard from "./Components/ProductionCard"
import Status from "./Components/Status"
import StepsCards from "./Components/StepsCards"

const getData = async () => {
  const res= await fetch("/public/products.json")
  return res.json()
}

const dataPromise = getData()



function App() {

  return (
    <>
     <Navbar />

     <Banner />

     <Status />

    {/* Main Section Toggle */}
    <ProductionCard dataPromise={dataPromise} />
  
    <StepsCards />

    <Pricing />

    <Join />

    <Footer />

    
      
      
    </>
  )
}

export default App
