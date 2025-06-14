import backgroundImage from '../assets/background1.jpeg';

function HeroSection() {
    return (
        <div
            className="relative flex items-center justify-center overflow-hidden bg-no-repeat bg-center bg-cover rounded-md "
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundBlendMode: 'multiply',
                backgroundSize: '80% 95%',
                height: '90vh',
            }}
        >
            <div className='text-white text-center px-4'>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">Find your Perfect Home</h1>
                <p className="text-xl mb-8">Discover a wide selection of furniture and decor to the home of your dreams</p>
            </div>
        </div>
    );
}

export default HeroSection;