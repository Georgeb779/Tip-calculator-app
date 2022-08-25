import { Header, Footer, Calculator } from "./components";

function App() {
  return (
    <div className='tip-app'>
      <Header />
      <div className='tip-app__container'>
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
