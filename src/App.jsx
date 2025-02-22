import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AdGroup from "./components/AdGroup";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";


function App(){
  
  return(
    <>
       <Header/>
      <BrowserRouter>
            <NavBar/>
            <AdGroup/>
       </BrowserRouter>
       <ProductCard/>
       <Footer/>
    </>
  )
}

export default App;