
const About = () => {
    return (
        <>
            <div className="flex flex-col py-10 px-5 md:px-10 lg:px-20 bg-indigo-950 secondaryFontabout">

                {/* Section 1 */}
                <div className="flex flex-col md:flex-row md:mb-10">
                    <div className="w-full mainFont md:w-1/4 flex justify-center items-center text-yellow-500 rounded text-3xl md:text-4xl mb-5 md:mb-0">
                        Our Story
                    </div>
                    <div className="w-full indent-8 tracking-wide md:w-3/4 flex justify-center items-center text-amber-50 text-2xl rounded px-5 md:px-10">
                        <p className="pl-5 mt-5 border-l-4 border-yellow-500">
                        Welcome to VibraWood Custom Instruments, exclusively available at Guitar Villa in Bethlehem, PA.
                        We became known for expert setup and modification work, trusted by musicians for improvements on existing instruments, including electronic modifications, repairs, and setup adjustments for optimum playability.
                        Noticing a gap in the market, we began using the best quality materials that large manufacturers overlooked. After years of prototyping with tone woods and electronics, we launched the VibraWood line of classically inspired guitars and basses.
                        
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col md:flex-row-reverse my-10">
                    <div className="w-full md:w-1/4 flex justify-center items-center rounded">
                        <img src="/images/vibrawood2.jpg" alt="" className="w-full border-2 drop-shadow-lg" />
                    </div>
                    <div className="w-full indent-8 tracking-wide md:w-3/4 flex justify-center items-center text-amber-50 text-2xl rounded px-5 md:px-10">
                        <p className="pr-5 mt-5 border-r-4 border-yellow-500">
                        We chose top materials and precision in the cutting and shaping process. Our highest-level instruments are finished with real nitro-cellulose lacquer for superior tone and progressive sound quality over years.
                        VibraWood instruments are designed as alternatives to vintage Fender instruments from the 50s, 60s, and 70s. These Custom Shop instruments start at $1650, providing a replaceable option without risking the loss of valuable vintage originals.
                        Our quality starts with selecting the best wood for each custom build. We use exceptional trees with beautiful, resonant hardwoods, creating instruments that are visually and sonically appealing.

                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col md:flex-row my-10">
                    <div className="w-full md:w-1/4 flex justify-center items-center rounded">
                        <img src="/images/John.jpg" alt="" className="w-full border-2 drop-shadow-lg" />
                    </div>
                    <div className="w-full indent-8 tracking-wide md:w-3/4 flex justify-center items-center text-amber-50 text-2xl rounded px-5 md:px-10">
                        <p className="pl-5 mt-5 border-l-4 border-yellow-500">
                        We source the best wood, pickups, hardware, and electronics for true custom builds. Each instrument resonates acoustically before being plugged in, distinguishing them from ordinary instruments. They are lightweight and highly resonant due to our tone wood selection.
                        Surprisingly affordable, our custom-made classics start at $1650. Customers can choose pickups, electronics, wood species, and finishes. We offer decades of expertise to help achieve the desired tone and feel.
                        We also offer higher levels of creativity with exotic wood and electronic options for those wanting more. Guitar Villa typically has some of our custom-built instruments on display for you to try.

                        </p>
                    </div>
                </div>

                {/* Section 5 */}
                <hr className="my-10" />
                <p className="my-10 p-5 text-3xl text-center text-amber-50">
                    VibraWood Custom instrument builds - where <a className="mainFont text-yellow-500">QUALITY</a> sings with every note.
                </p>
            </div>
        </>
    );
};

export default About;