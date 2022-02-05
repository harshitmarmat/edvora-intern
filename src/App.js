import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header"
import Products from "./components/products/Products";

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Header />
        <Products/>
    </div>
  );
}

export default App;
