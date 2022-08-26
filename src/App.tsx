import { Header, Footer, Calculator, Result } from "./components";

function App() {
  return (
    <div className='tip-app'>
      <Header />
      <div className='tip-app__container'>
        <Calculator />
        <Result />
      </div>
      <Footer />
    </div>
  );
}

export default App;
