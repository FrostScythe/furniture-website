// src/App.jsx
import {  FeatureCategory,  HeroSection,  NewArrivalSection,  Nav,  Footer,} from "./components";

function App() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-16">
        <HeroSection />
        <FeatureCategory />
        <NewArrivalSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
