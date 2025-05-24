// src/App.jsx
import {FeatureCategory, HeroSection, NewArrivalSection,Nav} from './components';

function App() {
    return (
        <>
            <Nav/>
            <div>
                <HeroSection/>
                <NewArrivalSection/>
                <br/><br/>
                <FeatureCategory/>
            </div>
        </>
    );
}

export default App;
