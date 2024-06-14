const About = () => {
    return (
        <div className="flex flex-col w-fit items-center text-center secondaryFontlite">
            <div className="m-4 flex w-11/12 justify-center content-center h-80 gap-20">
                <p className="w-1/3 flex justify-center items-center bg-gray-400 rounded">Our Story</p>
                <p className="w-fit flex justify-center items-center bg-gray-500 p-5 rounded" >Welcome to VibraWood Custom Instruments, available at Guitar Villa in Bethlehem, PA. Known for expert setup and modification, we use top-quality materials overlooked by large manufacturers. After years of prototyping, we launched VibraWood guitars and basses.
                </p>
            </div>
            <div className="m-4 flex w-11/12 justify-center content-center h-80 gap-20">
                <p className="w-fit flex justify-center items-center bg-gray-500 p-5">Our instruments use precision cutting and shaping, with nitro-cellulose lacquer for superior tone. VibraWood offers alternatives to vintage Fender instruments from the 50s-70s, starting at $1650.
                    We select the best wood for custom builds, using resonant hardwoods for visually and sonically appealing instruments. Our instruments resonate acoustically before being plugged in, ensuring lightweight and high resonance.

                </p>
                <img src="/images/John.jpg" alt="" className="w-1/3 flex justify-center items-center bg-gray-400" />
            </div>
            <div className="m-4 flex w-11/12 justify-center content-center h-80 gap-20">
                <img className="w-1/3 flex justify-center items-center bg-gray-400" src="" alt="" />
                <p className="w-fit flex justify-center items-center bg-gray-500 p-5">Affordable custom classics start at $1650, with options for pickups, electronics, wood species, and finishes. We offer decades of expertise for your desired tone and feel, including exotic wood and electronic options. Visit Guitar Villa to try our custom-built instruments.
                </p>
            </div>
            <div>
                <p className="m-20 p-10 border-t-8 text-3xl border-black">
                    VibraWood Custom instrument builds - where QUALITY sings with every note.
                </p>
            </div>
        </div>
    );
};

export default About;