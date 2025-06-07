// src/App.jsx
import {FeatureCategory, HeroSection, NewArrivalSection,Nav, Footer} from './components';

function App() {
    return (
        <>
            <Nav/>
            <div>
            <br/><br/>
                <HeroSection/>
                <br/>
                <FeatureCategory/>
                 <br/><br/><br/>
                <NewArrivalSection/>
                <br/><br/>
                <br/><br/>
               <Footer/>
                <br/><br/>
            </div>
        </>
    );
}

export default App;
