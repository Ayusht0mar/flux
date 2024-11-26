import Image from "next/image";

const HeroArea = () => {
    return ( 
        <section className="relative mx-auto w-[90vw] bg-black text-white py-4 lg:py-16">
            <div className="grid items-center grid-flow-col grid-rows-2 lg:grid-flow-row lg:grid-rows-1 grid-cols-3">
                <h1 className="col-span-2 text-[48px] lg:text-[80px] leading-none uppercase font-bold text-[#E5E5E5] font-barlowCondensed">Translating Your <br /> Thoughts and Visions</h1>
                <div className="col-span-3 lg:col-span-1">
                    <p className="mt-4 lg:text-xl tracking-wide">
                    We Provide Our Art To Ensure That Human Insights Work Well Together With Technology, Brand, and Business, With a Focus on Fast and Assertive Results.
                    </p>
                    <div className="flex mt-8">
                    <button className="px-6 py-2 bg-[#FE752D] hover:bg-orange-600 text-lg text-[#0d0d0d] font-semibold rounded-full mr-4">Schedule a meet</button>
                    <button className="px-6 py-2 text-lg border border-[#FE752D] text-white rounded-full">Our Work</button>
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full rounded-2xl aspect-[4/1]">
            <Image
                src="/heroimg.png"
                alt="Hero Img"
                width={1000}
                height={1000}
                className="w-full"
            />
            </div>
      </section>
     );
}
 
export default HeroArea;