import { BrandsBanner, Navbar, Hero, NewArrivals } from "./components/";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandsBanner />
        <NewArrivals />
      </main>
    </>
  );
}

export default App;
