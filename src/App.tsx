import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="mx-auto 2xl:w-[1440px]">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
