import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/menu";
import PizzaCard from "./Components/PizzaCard";
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
      {/* Hello World! */}
      <Header />
      <Menu />
      <PizzaCard />
      <Footer/>
    </div>
  );
}

export default App;
