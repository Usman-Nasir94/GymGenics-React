
const HeroSection = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden m-0 p-0">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-[url('/images/HeroSection-BG.jpg')] 
                           bg-cover bg-center md:bg-position-[center_top] bg-no-repeat 
                           grayscale contrast-90"
            />



            {/* Content Layer */}
            <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
                <span className="text-yellow-400 px-2 py-1 tracking-widest text-sm mb-4 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full">
                    First Time?
                </span>
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase italic">
                    Your First <span className="text-orange-600">Ride</span> <br /> 
                    Starts Here
                </h1>
                <p className="text-gray-300 mt-4 max-w-md text-lg">
                    Everything you need to feel confident, prepared, and ready to go.
                </p>
                <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-sm uppercase transition-all">
                    Book Now
                </button>
            </div>
        </section>
    )
}

export default HeroSection
