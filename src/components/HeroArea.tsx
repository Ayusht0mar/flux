const HeroArea = () => {
    return ( 
        <section className="relative mx-auto w-[90vw] bg-black text-white py-16">
            <div className="grid grid-cols-2">
                <h1 className="text-5xl leading-normal uppercase font-bold text-[#E5E5E5]">Translating Your Thoughts and Visions</h1>
                <div>
                    <p className="mt-4 text-lg">
                    We Provide Our Art To Ensure That Human Insights Work Well Together With Technology, Brand, and Business, With a Focus on Fast and Assertive Results.
                    </p>
                    <div className="flex mt-8">
                    <button className="px-6 py-2 bg-[#FE752D] hover:bg-orange-600 text-[#0d0d0d] font-semibold rounded-full mr-4">Schedule a meet</button>
                    <button className="px-6 py-2 border border-[#FE752D] text-white rounded-full">Our Work</button>
                    </div>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 bg-gray-600 w-full rounded-2xl aspect-[4/1]">
            
            </div>
      </section>
     );
}
 
export default HeroArea;