import { FeatureCategory, HeroSection, NewArrivalSection, NewsLetter } from "../components";

function Home(){
    return(
        <main className="flex flex-col gap-16">
        <HeroSection />
        <FeatureCategory />
        <NewArrivalSection />
        <NewsLetter />
      </main>
    )
}
export default Home;